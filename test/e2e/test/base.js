module.exports = {
  base: function (browser) {
    browser
      .url('http://localhost:8080/examples/example.html')
      .assert.containsText('#app', 'Google')
      .assert.containsText('#app', 'Microsoft')
      .end();
  }
};
