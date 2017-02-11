/*!
 * vue-add-to-calendar v1.0.1 
 * (c) 2017 nicolasbeauvais
 * Released under the MIT License.
 */
'use strict';

var AddToCalendarMixin = {
  template: '<a :href="$parent.calendarUrl(calendar)" v-bind:class="`vue-add-to-calendar ${calendar}-calendar`" target="_blank"><slot></slot></a>'
};

var calendars = {
  google: {
    url: 'http://www.google.com/calendar/event?action=TEMPLATE&trp=false&text=@title&dates=@start/@end&location=@location&details=@details'
  },

  microsoft: {
    url: 'http://calendar.live.com/calendar/calendar.aspx?rru=addevent&dtstart=@start&dtend=@end&summary=@title&location=@location'
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
      return this.calendars[calendar].url
        .replace(/@title/g, this.title)
        .replace(/@start/g, this.formattedDate(this.start))
        .replace(/@end/g, this.formattedDate(this.end))
        .replace(/@location/g, this.location)
        .replace(/@details/g, this.details);
    },

    formattedDate: function formattedDate (date) {
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

AddToCalendar.version = '1.0.1';

AddToCalendar.install = function (Vue) {
  Vue.component('add-to-calendar', AddToCalendar);
};

if (typeof window !== 'undefined') {
  window.AddToCalendar = AddToCalendar;
}

module.exports = AddToCalendar;