# vue-add-to-calendar

[![Release](https://img.shields.io/github/release/nicolasbeauvais/vue-add-to-calendar.svg?style=flat-square)](https://github.com/nicolasbeauvais/vue-add-to-calendar/releases)
[![Build Status](https://img.shields.io/travis/nicolasbeauvais/vue-add-to-calendar.svg?style=flat-square)](https://travis-ci.org/nicolasbeauvais/vue-add-to-calendar)
[![Coverage Status](https://img.shields.io/coveralls/nicolasbeauvais/vue-add-to-calendar/master.svg?style=flat-square)](https://coveralls.io/github/nicolasbeauvais/vue-add-to-calendar?branch=master)
[![Downloads](https://img.shields.io/npm/dt/vue-add-to-calendar.svg?style=flat-square)](https://www.npmjs.com/package/vue-add-to-calendar)
[![License](https://img.shields.io/github/license/nicolasbeauvais/vue-add-to-calendar.svg?style=flat-square)](https://github.com/nicolasbeauvais/vue-add-to-calendar/blob/master/LICENSE)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

A Vue.js component that provides 'Add to Calendar' functionality

##[Demo](https://nicolasbeauvais.github.io/vue-add-to-calendar/)
&nbsp;
## Include support for:
- Google calendar
- Microsoft live calendar

---

## Installation

```bash
# Yarn
yarn add vue-add-to-calendar

# NPM
npm install --save vue-add-to-calendar

# Bower
bower install vue-add-to-calendar
```

## Usage

### Loading the library

##### Browserify / Webpack

```javascript
var AddToCalendar = require('vue-add-to-calendar');

Vue.use(AddToCalendar);
```

##### HTML

```html
<script src="/dist/vue-add-to-calendar.min.js"></script>
```

### Using the add to calendar component

```html
<add-to-calendar title="VueConf" location="WROCŁAW, POLAND" :start="new Date()"
                       :end="new Date((new Date).setDate((new Date).getDate() + 1))"
                       details="The first Official Vue.js Conference in the world!" v-cloak inline-template>
  <div>
    <google-calendar id="google-calendar">
      <i class="fa fa-google"></i> Add to Google calendar
    </google-calendar>
    <microsoft-calendar id="microsoft-calendar">
      <i class="fa fa-windows"></i> Add to Microsoft live calendar
    </microsoft-calendar>
  </div>
</add-to-calendar>
```

#### Available properties

List of available props to use in the component:

Prop           | Data Type  | Default   | Description
-------------- | ---------- | --------- | -----------
`title`        | String     |           | Event title
`details`      | String     |           | Event details
`location`     | String     |           | Event location
`start`        | Date       |           | Event start date
`end`          | Date       |           | Event end date

## Feature request
Feel free to open an issue to ask for a new calendar support.

## Changelog
Details changes for each release are documented in the [CHANGELOG.md](https://github.com/nicolasbeauvais/vue-add-to-calendar/blob/master/CHANGELOG.md).

## Issues
Please make sure to read the [Issue Reporting Checklist](https://github.com/nicolasbeauvais/vue-add-to-calendar/blob/master/CONTRIBUTING.md#issue-reporting-guidelines) before opening an issue. Issues not conforming to the guidelines may be closed immediately.

## Contribution
Please make sure to read the [Contributing Guide](https://github.com/nicolasbeauvais/vue-add-to-calendar/blob/master/CONTRIBUTING.md) before making a pull request.

## License

[MIT](http://opensource.org/licenses/MIT)
