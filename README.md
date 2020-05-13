<h1 align="center">Vue Add To Calendar</h1>

[![Release](https://img.shields.io/github/release/nicolasbeauvais/vue-add-to-calendar.svg?style=flat-square)](https://github.com/nicolasbeauvais/vue-add-to-calendar/releases)
[![Build Status](https://travis-ci.org/nicolasbeauvais/vue-add-to-calendar.svg?branch=master)](https://travis-ci.org/nicolasbeauvais/vue-add-to-calendar)
[![Coverage Status](https://img.shields.io/coveralls/nicolasbeauvais/vue-add-to-calendar/master.svg?style=flat-square)](https://coveralls.io/github/nicolasbeauvais/vue-add-to-calendar?branch=master)
[![Downloads](https://img.shields.io/npm/dt/vue-add-to-calendar.svg?style=flat-square)](https://www.npmjs.com/package/vue-add-to-calendar)
[![License](https://img.shields.io/github/license/nicolasbeauvais/vue-add-to-calendar.svg?style=flat-square)](https://github.com/nicolasbeauvais/vue-add-to-calendar/blob/master/LICENSE)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

<h3 align="center">A Vue.js renderless component providing 'Add to Calendar' functionality</h3>
<h4 align="center">Less than 1kb gzipped</h4>

--- 

## [Demo](https://nicolasbeauvais.github.io/vue-add-to-calendar/)

### What is a renderless component?

Renderless components give you the highest possible control over your markup and styling. This means that `vue-add-to-calendar` ship with minimal HTML and no CSS to let you adapt the look and feel of the components to your needs. You can learn more about renderless components in [this blog article](https://adamwathan.me/renderless-components-in-vuejs/) by [@adamwathan](https://github.com/adamwathan).

## Include support for:
- Google calendar
- Microsoft live calendar
- Office 365 calendar

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
<add-to-calendar title="VueConf" 
                 location="WROCŁAW, POLAND" 
                 :start="new Date()"
                 :end="new Date((new Date).setDate((new Date).getDate() + 1))"
                 details="The first Official Vue.js Conference in the world!" 
                 inline-template>
  <div>
  
    <google-calendar id="google-calendar">
      <i class="fa fa-google"></i> Add to Google calendar
    </google-calendar>
    
    <microsoft-calendar id="microsoft-calendar">
      <i class="fa fa-windows"></i> Add to Microsoft live calendar
    </microsoft-calendar>
    
    <office365-calendar id="office365-calendar">
      <i class="fa fa-windows"></i> Add to Office365 outlook calendar
    </office365-calendar>
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
Detailed changes for each release can be found in [CHANGELOG.md](https://github.com/nicolasbeauvais/vue-add-to-calendar/blob/master/CHANGELOG.md).

## Issues
Please make sure to read the [Issue Reporting Checklist](https://github.com/nicolasbeauvais/vue-add-to-calendar/blob/master/CONTRIBUTING.md#issue-reporting-guidelines) before opening an issue. Issues not conforming to the guidelines may be closed immediately.

## Contribution
Please make sure to read the [Contributing Guide](https://github.com/nicolasbeauvais/vue-add-to-calendar/blob/master/CONTRIBUTING.md) before making a pull request.

## License

[MIT](http://opensource.org/licenses/MIT)
