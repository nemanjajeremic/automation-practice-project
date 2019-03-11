let searchPage = require('./search.page');

describe('My store - search page', function () {
    browser.ignoreSynchronization = true;
    let search = new searchPage();

    it('Open category', function () {
        browser.get(browser.baseUrl);
        search.dressesButton.click();
        browser.sleep(3000);
        expect(search.categoryName.getText()).toEqual('Dresses');
    });

    it('Use filter - composition', function () {
        search.filterViscose.click();
        browser.sleep(3000);
        expect(search.searchResultProduct.count()).toBe(2);
    });

})