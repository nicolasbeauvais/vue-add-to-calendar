import AddToCalendarMixin from './add-to-calendar-mixin';

export const calendars = {
  google: {
    url: 'http://www.google.com/calendar/render?action=TEMPLATE&trp=false',
    parameters (title, location, details, start, end) {
      const parameters = {
        text: title,
        location: location,
        details: details
      };

      if (start && end) {
        parameters.dates = `${start}/${end}`;
      }

      return parameters;
    }
  },

  microsoft: {
    url: 'https://outlook.live.com/owa/?rru=addevent',
    parameters (title, location, details, start, end) {
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
    parameters (title, location, details, start, end) {
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
      let url = this.calendars[calendar].url;
      const parameters = this.calendars[calendar].parameters(
        this.formatString(this.title),
        this.formatString(this.location),
        this.formatString(this.details),
        this.formatDate(this.start, calendar),
        this.formatDate(this.end, calendar)
      );

      for (const key in parameters) {
        if (parameters.hasOwnProperty(key) && parameters[key]) {
          url += `&${key}=${parameters[key]}`;
        }
      }

      return url;
    },

    formatString (string) {
      return encodeURIComponent(string).replace(/%20/g, '+');
    },

    formatDate (date, calendar) {
      if (!date) { return null; }

      const formatDate = date.toISOString();
      const isGoogle = calendar === 'google';
      return isGoogle
        ? formatDate.replace(/-|:|\.\d+/g, '')
        : formatDate;
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
    },
    'office365-calendar': {
      mixins: [AddToCalendarMixin],
      data: function () { return { calendar: 'office365' }; }
    }
  }
};
