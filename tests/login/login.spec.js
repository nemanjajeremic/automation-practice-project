let loginPage = require('./login.page');
let homePage = require('../home/home.page');

describe('My store - login page', function () {
    
    browser.ignoreSynchronization = true;
    let login = new loginPage();
    let home = new homePage();

    let emailAddressCredential = 'nemanja1025485@nemanja.com';
    let passwordCredential = 'nemanja123';
    
    it('Go to login page', function () {
        browser.get(browser.baseUrl);
        login.signOutButton.click();
        browser.sleep(2000);
        home.signInButton.click();
        expect(login.pageHeading.getText()).toEqual('AUTHENTICATION');

    });
  
    it('Error message on empty both credentials', function () {
        login.signInButton.click();
        expect(login.errorAlert.getText()).toContain('error');
    });

    it('Error message on empty email', function () {
        login.loginEmailInput.sendKeys(emailAddressCredential);
        login.signInButton.click();
        expect(login.errorAlert.getText()).toContain('error');
    });

    it('Error message on empty password', function () {
        login.loginEmailInput.clear();
        login.loginPasswordInput.sendKeys(passwordCredential);
        expect(login.errorAlert.getText()).toContain('error');
    });

    it('Redirect to account page after successful login', function () {
        login.logIn();
        expect(login.pageHeading.getText()).toEqual('MY ACCOUNT');
    });

})