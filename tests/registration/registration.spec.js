let registrationPage = require('./registration.page');
let homePage = require('../home/home.page');
let loginPage = require('../login/login.page.js');
let globalPage = require('../global/global.page.js');

describe('My store - login page', function () {
    browser.ignoreSynchronization = true;
    let registration = new registrationPage();
    let home = new homePage();
    let global = new globalPage();
    let login = new loginPage();

    let firstNameValue = 'Nemanja';
    let lastNameValue = 'Jeremic';

    it('Create account - invalid', function () {
        browser.get(browser.baseUrl);
        home.signInButton.click();
        login.createAccountButton.click();
         global.waitUntilVisible(login.createAccountEmailError, 30000);
        expect(login.createAccountEmailError.isDisplayed()).toBe(true);
    });

    it('Create account - happy flow', function () {
        //go to create account page
        /*  home.signInButton.click(); */
        login.emailAdressInput.sendKeys(registration.randomEmailValue);
        console.log(`Created account with the following credentials:
        email: ${registration.randomEmailValue}
        password: nemanja123 `);
        login.createAccountButton.click();
        global.waitUntilVisible(registration.radioGenderMale, 15000);
        //enter personal info
        registration.radioGenderMale.click();
        registration.inputFirstname.sendKeys(firstNameValue);
        registration.inputLastName.sendKeys(lastNameValue);
        registration.inputPassword.sendKeys('nemanja123');
        registration.calendarDay.sendKeys('22');
        registration.calendarMonth.sendKeys('July');
        registration.calendarYear.sendKeys('1991');
        registration.checkboxNewsletter.click();
        registration.checkboxPromotions.click();
        //enter address info
        registration.inputAddressFirstname.sendKeys(firstNameValue);
        registration.inputAddressLastName.sendKeys(lastNameValue);
        registration.inputAddress.sendKeys('KK 65');
        registration.inputAddressCity.sendKeys('BG');
        registration.inputAddressState.sendKeys('Alabama');
        registration.inputAddressZip.sendKeys('00000');
        registration.inputAddressCountry.sendKeys('United States');
        registration.inputAddressMobilePhone.sendKeys('111222333');
        registration.inputAddressAlias.sendKeys('Main Address');

        registration.submitRegistrationButton.click();

        browser.sleep(3000);
        login.signOutButton.click();
    });

})