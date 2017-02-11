module.exports = {
  base: function (browser) {
    browser
      .url('http://127.0.0.1:8080/examples/example.html')
      .assert.containsText('#app', 'Google')
      .assert.containsText('#app', 'Microsoft')
      .end();
  }
};
