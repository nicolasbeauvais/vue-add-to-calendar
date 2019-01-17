export default {
	template:`<a v-on:click.prevent="$parent.download(calendar)" :class="calendarClass"><slot></slot></a>`,

	computed: {
		calendarClass() {
			return ['vue-add-to-calendar', `${this.calendar}-calendar`];
		}
	}
};
