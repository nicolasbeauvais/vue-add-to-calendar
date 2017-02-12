/*!
 * vue-add-to-calendar v1.0.4 
 * (c) 2017 nicolasbeauvais
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.VueAddToCalendar = factory());
}(this, (function () { 'use strict';

var AddToCalendarMixin = {
  template: "<a :href=\"$parent.calendarUrl(calendar)\" :class=\"calendarClass\" target=\"_blank\"><slot></slot></a>",

  computed: {
    calendarClass: function calendarClass () {
      return ['vue-add-to-calendar', ((this.calendar) + "-calendar")];
    }
  }
};

var calendars = {
  google: {
    url: 'http://www.google.com/calendar/event?action=TEMPLATE&trp=false',
    parameters: function parameters (title, location, details, start, end) {
      var parameters = {
        text: title,
        location: location,
        details: details
      };

      if (start && end) {
        parameters.dates = start + "/" + end;
      }

      return parameters;
    }
  },

  microsoft: {
    url: 'http://calendar.live.com/calendar/calendar.aspx?rru=addevent',
    parameters: function parameters$1 (title, location, details, start, end) {
      return {
        summary: title,
        location: location,
        description: details,
        dtstart: start,
        dtend: end
      };
    }
  }
};

var AddToCalendar = {
  props: {
    /**
     * Event title.
     * @var string
     */
    title: {
      type: String,
      default: ''
    },

    /**
     * Event location.
     * @var string
     */
    location: {
      type: String,
      default: ''
    },

    /**
     * Event details.
     * @var string
     */
    details: {
      type: String,
      default: ''
    },

    /**
     * Event start.
     * @var date
     */
    start: {
      type: Date,
      default: null
    },

    /**
     * Event end.
     * @var date
     */
    end: {
      type: Date,
      default: null
    }
  },

  data: function data () {
    return {
      /**
       * Available calendars.
       * @param object
       */
      calendars: calendars
    };
  },

  methods: {
    /**
     * Returns generated calendar url.
     *
     * @param calendar.
     */
    calendarUrl: function calendarUrl (calendar) {
      var url = this.calendars[calendar].url;
      var parameters = this.calendars[calendar].parameters(
        this.formatString(this.title),
        this.formatString(this.location),
        this.formatString(this.details),
        this.formatDate(this.start),
        this.formatDate(this.end)
      );

      for (var key in parameters) {
        if (parameters.hasOwnProperty(key) && parameters[key]) {
          url += "&" + key + "=" + (parameters[key]);
        }
      }

      return url;
    },

    formatString: function formatString (string) {
      return encodeURIComponent(string).replace(/%20/g, '+');
    },

    formatDate: function formatDate (date) {
      return date ? date.toISOString().replace(/-|:|\.\d+/g, '') : null;
    }
  },

  mounted: function mounted () {
    //
  },

  /**
   * Set component aliases for buttons and links.
   */
  components: {
    'google-calendar': {
      mixins: [AddToCalendarMixin],
      data: function () { return { calendar: 'google' }; }
    },
    'microsoft-calendar': {
      mixins: [AddToCalendarMixin],
      data: function () { return { calendar: 'microsoft' }; }
    }
  }
};

AddToCalendar.version = '1.0.4';

AddToCalendar.install = function (Vue) {
  Vue.component('add-to-calendar', AddToCalendar);
};

if (typeof window !== 'undefined') {
  window.AddToCalendar = AddToCalendar;
}

return AddToCalendar;

})));