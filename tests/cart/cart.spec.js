let shoppingCart = require('./cart.page.js');
let globalPage = require('../global/global.page');

describe('My store - cart functionality', function () {
    /*    let EC = ExpectedConditions; */
    browser.ignoreSynchronization = true;
    let cart = new shoppingCart();
    let global = new globalPage();

    it('Add product to cart and continue shopping', function () {
        browser.get(browser.baseUrl);
        cart.addToCart(5);
        global.waitUntilVisible(cart.cartModal, 30000);
        cart.continueShoppingButton.click();
        expect(cart.shoppingCartQuantity.getText()).toEqual('1');
    });

    it('Shopping cart modal closes after clicking on "continue shopping" button', function () {
        cart.addToCart(5);
        global.waitUntilVisible(cart.cartModal, 30000);
        cart.continueShoppingButton.click();
        browser.sleep(500);
        expect(cart.cartModal.isDisplayed()).toBe(false);
    });

})