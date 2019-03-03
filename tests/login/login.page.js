let loginPage = function () {
   
    //login credentials
    //n.jeremic@levi9.com
    //nemanja123
    
    let emailAddressCredential = 'n.jeremic@levi9.com';
    let passwordCredential = 'nemanja123';
    
    this.createAccountButton = element(by.id('SubmitCreate'));
    this.createAccountEmailError = element(by.id('create_account_error'));
    this.emailAdressInput = element(by.id('email_create'));

    this.pageHeading = element(by.css('h1[class="page-heading"]'));
    this.loginEmailInput = element(by.id('email'));
    this.loginPasswordInput = element(by.id('passwd'));
    this.signInButton = element(by.id('SubmitLogin'));
    this.signOutButton = element(by.css('a[class="logout"]'));
    this.errorAlert = element(by.css('div[class*="alert alert-danger"] p'));

    this.logIn = function (){
        this.loginEmailInput.clear();
        this.loginPasswordInput.clear();
        this.loginEmailInput.sendKeys(emailAddressCredential);
        this.loginPasswordInput.sendKeys(passwordCredential);
        this.signInButton.click();
    }
}

module.exports = loginPage;