import Vue from 'vue';
import AddToCalendar from '../../src/add-to-calendar';
import AddToCalendarMixin from '../../src/add-to-calendar-mixin';

describe('AddToCalendar', () => {
  const createComponent = (propsData = {}, attr = {}, mixin = AddToCalendarMixin) => {
    const Ctor = Vue.extend({
      template: `
        <add-to-calendar inline-template>
          <div>
            <google-calendar id="google-calendar">
              Add to Google calendar
            </google-calendar>
            <microsoft-calendar id="microsoft-calendar">
              Add to Microsoft live calendar
            </microsoft-calendar>
          </div>
        </add-to-calendar>
      `,
      mixins: [mixin],
      components: {
        AddToCalendar
      }
    });

    return new Ctor({
      propsData,
      data () {
        return {
          attr
        };
      }
    }).$mount();
  };

  // Inspect the raw component options
  it('has a mounted method', () => {
    expect(typeof AddToCalendar.mounted).toBe('function');
  });

  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    expect(typeof AddToCalendar.data).toBe('function');
    const defaultData = AddToCalendar.data();
    expect(typeof defaultData.calendars).toBe('object');
  });

  xit('should set component aliases correctly', () => {
    createComponent();

    // const vm = createComponent();
    // console.log(vm.components, vm.google);
  });

  xit('should get correct calendar url', () => {
  });
});
