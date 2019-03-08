let homePage = require('./home.page.js');
let globalPage = require('../global/global.page.js');

describe('My store - home page', function () {
    /*    let EC = ExpectedConditions; */
    browser.ignoreSynchronization = true;
    let home = new homePage();
    let global = new globalPage();
    let EC = protractor.ExpectedConditions;

    beforeEach(function () {
        browser.get(browser.baseUrl);
        /* home.waitUntilVisible(home.bestSellersButton, 30000); */
    })

    it('Empty search value shows error message', function () {
        home.searchButton.click();
        expect(home.alertWarning.getText()).toContain('enter a search keyword');
    });

    it('Best sellers button displays best sellers tab', function () {
        home.bestsellersButton.click();
        expect(home.bestSellerTab.getAttribute('class')).toEqual('active');
    });

        //TODO - check if slider is chaning background on clicking next/previous button

})