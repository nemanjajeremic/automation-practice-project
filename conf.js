// conf.js
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  framework: 'jasmine',
  baseUrl: 'http://automationpractice.com/index.php',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./tests/home/home.spec.js'],
  multiCapabilities: [{
    browserName: 'chrome'
  }],

  onPrepare: function () {
    browser.driver.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        /* 
                displayStacktrace: true, */
        displayFailuresSummary: true,
        displayFailuredSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true
      }
    }));
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target/screenshots'
      })
    )
  },

  jasmineNodeOpts: {
    print: function () {}
  }
}