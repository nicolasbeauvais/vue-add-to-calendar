import AddToCalendarMixin from './add-to-calendar-mixin';

export const calendars = {
  google: {
    url: 'http://www.google.com/calendar/event?action=TEMPLATE&trp=false&text=@title&dates=@start/@end&location=@location&details=@details'
  },

  microsoft: {
    url: 'http://calendar.live.com/calendar/calendar.aspx?rru=addevent&dtstart=@start&dtend=@end&summary=@title&location=@location'
  }
};

export default {
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

  data () {
    return {
      /**
       * Available calendars.
       * @param object
       */
      calendars
    };
  },

  methods: {
    /**
     * Returns generated calendar url.
     *
     * @param calendar.
     */
    calendarUrl (calendar) {
      return this.calendars[calendar].url
        .replace(/@title/g, this.title)
        .replace(/@start/g, this.formattedDate(this.start))
        .replace(/@end/g, this.formattedDate(this.end))
        .replace(/@location/g, this.location)
        .replace(/@details/g, this.details);
    },

    formattedDate (date) {
      return date ? date.toISOString().replace(/-|:|\.\d+/g, '') : null;
    }
  },

  mounted () {
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
