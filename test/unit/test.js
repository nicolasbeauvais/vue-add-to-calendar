import Vue from 'vue';
import AddToCalendar, { calendars } from '../../src/add-to-calendar';
import AddToCalendarMixin from '../../src/add-to-calendar-mixin';

describe('AddToCalendar', () => {
  const event = {
    title: 'VueConf',
    location: 'WROCŁAW, POLAND',
    start: new Date(),
    end: new Date((new Date()).setDate((new Date()).getDate() + 1)),
    details: 'The first Official Vue.js Conference in the world!'
  };

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
            <office365-calendar id="office365-calendar">
              Add to Office365 outlook calendar
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

  it('has a mounted method', () => {
    expect(typeof AddToCalendar.mounted).toBe('function');
  });

  it('has a valid template', () => {
    expect(typeof AddToCalendarMixin.template).toBe('string');

    const vm = createComponent().$children[0];

    expect(vm.$children[0].$el.text.trim()).toBe('Add to Google calendar');
    expect(vm.$children[1].$el.text.trim()).toBe('Add to Microsoft live calendar');
    expect(vm.$children[2].$el.text.trim()).toBe('Add to Office365 outlook calendar');

    expect(vm.$children[0].$el.href).toContain(calendars.google.url);
    expect(vm.$children[1].$el.href).toContain(calendars.microsoft.url);
    expect(vm.$children[2].$el.href).toContain(calendars.microsoft.url);
  });

  it('has a calendar class computed property', () => {
    expect(typeof AddToCalendarMixin.template).toBe('string');
  });

  it('sets the correct default data', () => {
    expect(typeof AddToCalendar.data).toBe('function');

    const defaultData = AddToCalendar.data();
    expect(typeof defaultData.calendars).toBe('object');
    expect(defaultData.calendars).toBe(calendars);
  });

  it('should set url parameters correctly', () => {
    for (const calendar in calendars) {
      expect(typeof calendars[calendar].parameters).toBe('function');
      expect(typeof calendars[calendar].parameters(
        event.title,
        event.location,
        event.description,
        event.start,
        event.end
      )).toBe('object');
    }
  });
});
