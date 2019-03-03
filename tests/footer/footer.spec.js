let footerPage = require('./footer.page');
let globalPage = require('../global/global.page.js');
let loginPage = require('../login/login.page.js');
let homePage = require('../home/home.page.js');

describe('My store - footer', function () {
    /*    let EC = ExpectedConditions; */
    browser.ignoreSynchronization = true;
    let footer = new footerPage();
    let home = new homePage();
    let login = new loginPage();
    let global = new globalPage();

    it('Categories links redirection', function () {
        browser.get(browser.baseUrl);
        login.signOutButton.click();
        footer.categoriesWomenButton.click();
        expect(browser.getCurrentUrl()).toEqual('http://automationpractice.com/index.php?id_category=3&controller=category');
    });

    it('Information links redirection', function() {
        browser.get(browser.baseUrl);
        footer.informationSpecialsButton.click();
        expect(browser.getCurrentUrl()).toEqual('http://automationpractice.com/index.php?controller=prices-drop');
        browser.navigate().back();
        footer.informationNewProductsButton.click();
        expect(browser.getCurrentUrl()).toEqual('http://automationpractice.com/index.php?controller=new-products');
        browser.navigate().back();
        footer.informationBestsellersButton.click();
        expect(browser.getCurrentUrl()).toEqual('http://automationpractice.com/index.php?controller=best-sales');
        browser.navigate().back();
        footer.informationOurStoresButton.click();
        expect(browser.getCurrentUrl()).toEqual('http://automationpractice.com/index.php?controller=stores');
        browser.navigate().back();
        footer.informationContactUsButton.click();
        expect(browser.getCurrentUrl()).toEqual('http://automationpractice.com/index.php?controller=contact');
        browser.navigate().back();
        footer.informationTermsAndConditionsButton.click();
        expect(browser.getCurrentUrl()).toEqual('http://automationpractice.com/index.php?id_cms=3&controller=cms');
        footer.informationAboutUsButton.click();
        expect(browser.getCurrentUrl()).toEqual('http://automationpractice.com/index.php?id_cms=4&controller=cms');
        footer.informationSitemapButton.click();
        expect(browser.getCurrentUrl()).toEqual('http://automationpractice.com/index.php?controller=sitemap');

    });
        
    it('My account links for guest user', function() {
        browser.get(browser.baseUrl);
        footer.myAccountOrdersButton.click();
        global.waitUntilVisible(login.pageHeading, 150000)
        expect(login.pageHeading.getText()).toEqual('AUTHENTICATION');
        browser.navigate().back();
        footer.myAccountCreditSlipsButton.click();
        expect(login.pageHeading.getText()).toEqual('AUTHENTICATION');
        browser.navigate().back();
        footer.myAccountAddressButton.click();
        expect(login.pageHeading.getText()).toEqual('AUTHENTICATION');
        browser.navigate().back();
        footer.myAccountPersonalInfoButton.click();
        expect(login.pageHeading.getText()).toEqual('AUTHENTICATION');
        browser.navigate().back();
        expect(footer.myAccountSignOutButton.isPresent()).toBe(false);

    });

    it('My account links for logged in user', function() {
        browser.get(browser.baseUrl);
        home.signInButton.click();
        login.logIn();
        footer.myAccountOrdersButton.click();
        expect(browser.getCurrentUrl()).toEqual('http://automationpractice.com/index.php?controller=history');
        footer.myAccountCreditSlipsButton.click();
        expect(browser.getCurrentUrl()).toEqual('http://automationpractice.com/index.php?controller=order-slip');
        footer.myAccountAddressButton.click();
        expect(browser.getCurrentUrl()).toEqual('http://automationpractice.com/index.php?controller=addresses');
        footer.myAccountPersonalInfoButton.click();
        expect(browser.getCurrentUrl()).toEqual('http://automationpractice.com/index.php?controller=identity');
        footer.myAccountSignOutButton.click();
        expect(footer.myAccountSignOutButton.isPresent()).toBe(false);
       
    });
        
})