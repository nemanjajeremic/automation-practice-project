let searchPage = require('./search.page');
let homePage = require('../home/home.page');
let globalPage = require('../global/global.page');

describe('My store - login page', function () {
    browser.ignoreSynchronization = true;
    let search = new searchPage();
    let global = new globalPage();
    let home = new homePage();

    it('Open category', function () {
        browser.get('http://automationpractice.com/index.php?id_category=8&controller=category');
        browser.sleep(3000);
        expect(search.categoryName.getText()).toEqual('Dresses');
    });

    it('Use filter - composition', function () {
        search.filterViscose.click();
        browser.sleep(3000);
        expect(search.searchResultProduct.count()).toBe(2);
    });

})