let homePage = require('./home.page.js');

describe('My store - home page', function () {
    let home = new homePage();
    /*   beforeEach(function () {
          browser.waitForAngularEnabled(false);
      }) */

    it('Clicking search button opens new page with alert to enter a search keyword', function () {
        browser.get(browser.baseUrl);
        home.searchButton.click();
        expect(home.alertWarning.getText()).toContain('enter a search keyword');
    });

    fit('add to card', function () {
       home.logNames();
    });

})