let loginPage = require('./login.page');
let homePage = require('../home/home.page');

describe('My store - login page', function () {
    /*    let EC = ExpectedConditions; */
    browser.ignoreSynchronization = true;
    let login = new loginPage();
    let home = new homePage();
    let emailAddressCredential = 'n.jeremic@levi9.com';
    let passwordCredential = 'nemanja123';

    it('Go to login page', function () {
        browser.get(browser.baseUrl);
        home.signInButton.click();
        expect(login.pageHeading.getText()).toEqual('AUTHENTICATION');

    });
    //fix error message validation
    it('Error message on empty both credentials', function () {
        login.signInButton.click();
        expect(login.errorAlert.getText()).toContain('error');
    });

    it('Error message on empty email', function () {
        login.loginEmailInput.sendKeys('nemanja@levi9.com');
        login.signInButton.click();
        expect(login.errorAlert.getText()).toContain('error');
    });

    it('Error message on empty password', function () {
        login.loginEmailInput.clear();
        login.loginPasswordInput.sendKeys('nemanja@levi9.com');
        expect(login.errorAlert.getText()).toContain('error');
    });

    it('Redirect to account page after successful login', function () {
        login.loginEmailInput.clear();
        login.loginPasswordInput.clear();
        login.loginEmailInput.sendKeys(emailAddressCredential);
        login.loginPasswordInput.sendKeys(passwordCredential);
        login.signInButton.click();
        //TODO
        //put pageheading into account page object
        expect(login.pageHeading.getText()).toEqual('MY ACCOUNT');
    });

})