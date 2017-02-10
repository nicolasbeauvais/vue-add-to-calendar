function newWindowCheck (expectedUrl) {
  return function (result) {
    var newWindow = result.value[1];
    this.verify.equal(result.value.length, 2, 'There should be 2 windows open');

    this.switchWindow(newWindow);
    this.verify.urlContains(expectedUrl);
  };
}

var url = 'http://localhost:8080/examples/example.html';

module.exports = {
  'add to google calendar': function (browser) {
    browser
      .url(url)
      .click('#google-calendar')
      .windowHandles(newWindowCheck('google.com'))
      .end();
  },

  'add to microsoft calendar': function (browser) {
    browser
      .url(url)
      .click('#microsoft-calendar')
      .windowHandles(newWindowCheck('live.com'))
      .end();
  }
};
