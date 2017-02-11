import AddToCalendar from './add-to-calendar';

AddToCalendar.version = '1.0.2';

AddToCalendar.install = (Vue) => {
  Vue.component('add-to-calendar', AddToCalendar);
};

if (typeof window !== 'undefined') {
  window.AddToCalendar = AddToCalendar;
}

export default AddToCalendar;
