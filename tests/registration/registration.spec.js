let registrationPage = require('./registration.page');
let homePage = require('../home/home.page');
let loginPage = require('../login/login.page.js');
let globalPage = require('../global/global.page.js');

describe('My store - registration', function () {
    browser.ignoreSynchronization = true;
    let registration = new registrationPage();
    let home = new homePage();
    let global = new globalPage();
    let login = new loginPage();

    it('Create account - invalid', function () {
        browser.get(browser.baseUrl);
        global.waitUntilVisible(home.signInButton, 20000);
        home.signInButton.click();
        login.createAccountButton.click();
        global.waitUntilVisible(login.createAccountEmailError, 30000);
        expect(login.createAccountEmailError.isDisplayed()).toBe(true);
    });

    it('Create account - happy flow', function () {
        login.emailAddressInput.sendKeys(registration.email);
        login.createAccountButton.click();
        global.waitUntilVisible(registration.radioGenderMale, 15000);
        registration.enterUserData();
        registration.submitRegistrationButton.click();
        browser.sleep(3000);
        login.signOutButton.click();
    });

})