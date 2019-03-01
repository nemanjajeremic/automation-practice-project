let homePage = function () {
    this.signInButton = element(by.css('a[class="login"]'));
    this.searchInput = element(by.id('search_query_top'));
    this.searchButton = element(by.css('button[class*="button-search"]'));
    this.alertWarning = element(by.css('p[class="alert alert-warning"]'));
    this.bestsellersButton = element(by.css('a[class="blockbestsellers"]'));

    this.homepageTabs = element.all(by.css('ul[id="home-page-tabs"] li'));
    this.bestSellerTab = this.homepageTabs.get(1)

    this.productContainers = element.all(by.css('div[class*="product-container"]'));
    this.productNames = element.all(by.css('a[class*="product-name"]'));

    this.sliderButtonPrev = element(by.css('a[class="bx-next"]'));
    this.sliderButtonNext = element(by.css('a[class="bx-prev"]'));

    this.homeSlider = element(by.id('homeslider'));
    this.sliderBackgroundImage1 = element.all(by.css('img[src="http://automationpractice.com/modules/homeslider/images/sample-1.jpg"]')).first();
    this.sliderBackgroundImage2 = element.all(by.css('img[src="http://automationpractice.com/modules/homeslider/images/sample-2.jpg"]')).first();
    this.sliderBackgroundImage3 = element.all(by.css('img[src="http://automationpractice.com/modules/homeslider/images/sample-3.jpg"]')).first();
}

module.exports = homePage;