let homePage = require('./home.page.js');

describe('My store - home page', function () {
    /*    let EC = ExpectedConditions; */
    browser.ignoreSynchronization = true;
    let home = new homePage();

    beforeEach(function () {
        browser.get(browser.baseUrl);
        /* home.waitUntilVisible(home.bestSellersButton, 30000); */
    })

    it('Empty search value shows error message', function () {
        home.searchButton.click();
        expect(home.alertWarning.getText()).toContain('enter a search keyword');
    });

    it('Best sellers button displays best sellers tab', function () {
        home.bestsellersButton.click();
        expect(home.bestSellerTab.getAttribute('class')).toEqual('active');
    });

    fit('Add product to cart and continue shopping', function () {
     
        home.addToCart(5);
        home.waitUntilVisible(home.cartModal, 30000);
        home.continueShoppingButton.click();
        expect(home.shoppingCartQuantity.getText()).toEqual(home.productsInCart);
        browser.sleep(2000);
    });``
})