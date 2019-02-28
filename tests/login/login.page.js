let loginPage = function () {
    // TODO

    //login credentials
    //n.jeremic@levi9.com
    //nemanja123

    this.pageHeading = element(by.css('h1[class="page-heading"]'));
    this.loginEmailInput = element(by.id('email'));
    this.loginPasswordInput = element(by.id('passwd'));
    this.signInButton = element(by.id('SubmitLogin'));
    this.errorAlert = element(by.css('div[class*="alert alert-danger"] p'));
}

module.exports = loginPage;