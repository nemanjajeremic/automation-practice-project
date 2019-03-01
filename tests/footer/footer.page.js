let footerPage = function () {
    this.categoriesWomenButton = element.all(by.css('div[class="footer-container"] section[class="blockcategories_footer footer-block col-xs-12 col-sm-2"] a')).first();
    this.informationSpecialsButton = element(by.css('a[title="Specials"]'));
    this.informationNewProductsButton = element(by.css('a[title="New products"]'));
    this.informationBestsellersButton = element(by.css('a[title="Best sellers"]'));
    this.informationOurStoresButton = element(by.css('a[title="Our stores"]'));
    this.informationContactUsButton = element(by.css('a[title="Contact us"]'));
    this.informationTermsAndConditionsButton = element(by.css('a[title="Terms and conditions of use"]'));
    this.informationAboutUsButton = element(by.css('a[title="About us"]'));
    this.informationSitemapButton = element(by.css('a[title="Sitemap"]'));
    this.myAccountOrdersButton = element(by.css('a[title="My orders"]'));
    this.myAccountCreditSlipsButton = element(by.css('a[title="My credit slips"]'));
    this.myAccountAddressButton = element(by.css('a[title="My addresses"]'));
    this.myAccountPersonalInfoButton = element(by.css('a[title="Manage my personal information"]'));
    this.myAccountPersonalInfoButton = element(by.css('a[title="Manage my personal information"]'));
    this.myAccountSignOutButton = element(by.css('a[title="Sign out"]'));

}

module.exports = footerPage;