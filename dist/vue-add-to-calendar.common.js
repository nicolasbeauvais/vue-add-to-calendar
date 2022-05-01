/*!
 * vue-add-to-calendar v1.0.7 
 * (c) 2022 nicolasbeauvais
 * Released under the MIT License.
 */
'use strict';

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
    url: 'http://www.google.com/calendar/render?action=TEMPLATE&trp=false',
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
    url: 'https://outlook.live.com/owa/?rru=addevent',
    parameters: function parameters$1 (title, location, details, start, end) {
      return {
        subject: title,
        location: location,
        body: details,
        startdt: start,
        enddt: end
      };
    }
  },

  office365: {
    url: 'https://outlook.office.com/owa/?path=/calendar/action/compose&rru=addevent',
    parameters: function parameters$2 (title, location, details, start, end) {
      return {
        subject: title,
        location: location,
        body: details,
        startdt: start,
        enddt: end
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
        this.formatDate(this.start, calendar),
        this.formatDate(this.end, calendar)
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

    formatDate: function formatDate (date, calendar) {
      if (!date) { return null; }

      var formatDate = date.toISOString();
      var isGoogle = calendar === 'google';
      return isGoogle
        ? formatDate.replace(/-|:|\.\d+/g, '')
        : formatDate;
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
    },
    'office365-calendar': {
      mixins: [AddToCalendarMixin],
      data: function () { return { calendar: 'office365' }; }
    }
  }
};

AddToCalendar.version = '1.0.7';

AddToCalendar.install = function (Vue) {
  Vue.component('add-to-calendar', AddToCalendar);
};

if (typeof window !== 'undefined') {
  window.AddToCalendar = AddToCalendar;
}

module.exports = AddToCalendar;