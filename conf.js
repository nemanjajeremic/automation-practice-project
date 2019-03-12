// conf.js
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  /* 
    restartBrowserBetweenTests: true, */
  directConnect: true,
  framework: 'jasmine',
  baseUrl: 'http://automationpractice.com/index.php',
  /*   seleniumAddress: 'http://localhost:4444/wd/hub', */
  specs: ['./tests/registration/registration.spec.js',
    './tests/home/home.spec.js',
    './tests/login/login.spec.js',
    './tests/cart/cart.spec.js',
    './tests/footer/footer.spec.js',
    './tests/search/search.spec.js',
    './tests/product/product.spec.js'
  ],
  multiCapabilities: [{
    browserName: 'chrome'
  }],

  onPrepare: function () {
    browser.driver.manage().window().maximize();
    browser.ignoreSynchronization = true;

    browser.waitForAngularEnabled(false);
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {

        displayStacktrace: true,
        displayFailuresSummary: true,
        displayFailuredSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true
      }
    }));
    /* jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target/screenshots'
      })
    ) */
  },

  jasmineNodeOpts: {
    print: function () {}
  }
}