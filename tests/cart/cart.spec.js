let shoppingCart = require('./cart.page.js');
let globalPage = require('../global/global.page.js');
let productPage = require('../product/product.page.js');
let loginPage = require('../login/login.page.js');

describe('My store - cart functionality ', function () {
    /*    let EC = ExpectedConditions; */
    browser.ignoreSynchronization = true;
    let cart = new shoppingCart();
    let login = new loginPage();
    let product = new productPage();
    let global = new globalPage();

    it('Add one item multiple times', function () {
        browser.get(browser.baseUrl);
        cart.addMultipleProducts('Blouse', 3, global.waitUntilVisible);
        expect(cart.shoppingCartQuantity.getText()).toBe('3');
    });

    it('remove all items from the cart', function () {
        browser.get(browser.baseUrl);
        global.waitUntilVisible(cart.viewShoppingCart, 30000);
        cart.removeAllItems();
        expect(cart.shoppingCartQuantityNoProduct.isDisplayed()).toBe(true);
    });

    it('Add different items to cart and continue shopping', function () {
        browser.get(browser.baseUrl);
        cart.addToCart('Blouse', global.waitUntilVisible);
        cart.addToCart('Printed Chiffon Dress', global.waitUntilVisible);
        expect(cart.shoppingCartQuantity.getText()).toEqual('2');
    });

    it('Increase and decrease quantity of the item in cart', function () {
        cart.viewShoppingCart.click();
        cart.increaseItemQuantity('Blouse') // product already in cart, increased to 2 products
        cart.decreaseItemQuantity('Blouse') // decreased to 1 product 
        cart.increaseItemQuantity('Blouse') // increased to 2 products

        expect(cart.checkItemQuantity('Blouse')).toEqual('2');
    });

    it('Click on an item in the cart', function () {
        cart.viewShoppingCart.click();
        browser.sleep(3000);
        cart.clickOnItem('Blouse');
        global.waitUntilVisible(product.productName);
        expect(product.productName.getText()).toEqual('Blouse');

    });

    it('Remove product from cart', function () {
        cart.removeAllItems();
        browser.get(browser.baseUrl);
        cart.addToCart('Blouse', global.waitUntilVisible);
        cart.addToCart('Printed Chiffon Dress', global.waitUntilVisible);
        cart.viewShoppingCart.click();
        cart.deleteCartItem('Blouse');
        expect(cart.shoppingCartQuantity.getText()).toBe('1');

    });

    //finish flow
    it('Add to cart and checkout', function () {
        browser.get(browser.baseUrl);
        cart.addToCart('Blouse', global.waitUntilVisible);
        cart.viewShoppingCart.click();
        cart.cartProceedToCheckoutButton1.click();
        global.waitUntilVisible(login.loginEmailInput, 30000);
        login.logIn();
        cart.cartProceedToCheckoutAddressButton.click();
        cart.termsOfServiceCheckbox.click();
        cart.cartProceedToCheckoutShippingButton.click();
        cart.payByBankWire.click();
        cart.confirmOrderButton.click();
        expect(cart.orderConfirmationMessage.getText()).toContain('Your order on My Store is complete');
    });

    it('Quick view - add to cart', function () {
        //quick view window is an iFrame
        browser.get(browser.baseUrl);
        cart.addViaQuickView(5);
    });

})