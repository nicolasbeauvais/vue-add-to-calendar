export default {
  template: '<a :href="$parent.calendarUrl(calendar)" v-bind:class="`vue-add-to-calendar ${calendar}-calendar`" target="_blank"><slot></slot></a>'
};
