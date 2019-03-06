let searchPage = require('./search.page');
let homePage = require('../home/home.page');
let globalPage = require('../global/global.page');

fdescribe('My store - login page', function () {
    browser.ignoreSynchronization = true;
    let search = new searchPage();
    let global = new globalPage();
    let home = new homePage();

    it('Open category', function () {
        browser.get('http://automationpractice.com/index.php?id_category=8&controller=category');
        browser.sleep(3000);
        /*  home.searchInput.sendKeys('Summer Dress');
         home.searchButton.click(); */

    });

    it('Filter by color', async function () {
        global.waitUntilVisible(search.colorButton, 20000);
        console.log(await search.colorButton.isDisplayed());
        search.colorButton.click();
        browser.sleep(10000);
        search.printFilters();
    });

})