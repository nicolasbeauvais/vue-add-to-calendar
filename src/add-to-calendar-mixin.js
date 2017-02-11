export default {
  template: `<a :href="$parent.calendarUrl(calendar)" :class="calendarClass" target="_blank"><slot></slot></a>`,

  computed: {
    calendarClass () {
      return ['vue-add-to-calendar', `${this.calendar}-calendar`];
    }
  }
};
