let shoppingCart = require('./cart.page.js');
let globalPage = require('../global/global.page.js');
let loginPage = require('../login/login.page.js');
let homePage = require('../home/home.page.js');

describe('My store - cart functionality', function () {
    /*    let EC = ExpectedConditions; */
    browser.ignoreSynchronization = true;
    let cart = new shoppingCart();
    let home = new homePage();
    let login = new loginPage();
    let global = new globalPage();

    it('Add product to cart and continue shopping', function () {
        browser.get(browser.baseUrl);
        cart.addToCart(5);
        global.waitUntilVisible(cart.cartModal, 30000);
        cart.cartModalContinueShoppingButton.click();
        expect(cart.shoppingCartQuantity.getText()).toEqual('1');
    });

    it('Shopping cart modal closes after clicking on "continue shopping" button', function () {
        cart.addToCart(5);
        global.waitUntilVisible(cart.cartModal, 30000);
        cart.cartModalContinueShoppingButton.click();
        browser.sleep(500);
        expect(cart.cartModal.isDisplayed()).toBe(false);
    });

    it('Remove product from cart', function () {

        browser.get(browser.baseUrl);
        cart.addToCart(5);
        global.waitUntilVisible(cart.cartModal, 30000);
        cart.cartModalContinueShoppingButton.click();
        cart.addToCart(4);
        global.waitUntilVisible(cart.cartModal, 30000);
        cart.cartModalContinueShoppingButton.click();
        cart.viewShoppingCart.click();
        cart.deleteCartItem('SKU : demo_6');
       /*  if (login.signOutButton.isDisplayed()) {
            login.signOutButton.click();
        } */

        /*   expect(cart.shoppingCartQuantity.getText()).toEqual('1'); */
    });

    fit('Add to cart and checkout', async function () {
        browser.get(browser.baseUrl);
     /*    login.signOutButton.click(); */
        home.signInButton.click();
        login.logIn();
        browser.get(browser.baseUrl);
        cart.addToCart(5);
        global.waitUntilVisible(cart.cartModal, 30000);
        cart.cartModalProceedToCheckoutButton.click();
        browser.sleep(2000);
        cart.cartProceedToCheckoutButton1.click();
     /*    global.waitUntilVisible(cart.cartProceedToCheckoutButton, 30000);
        cart.cartProceedToCheckoutButton.click();
        global.waitUntilVisible(cart.cartProceedToCheckoutButton, 30000);
        cart.cartProceedToCheckoutButton.click(); */
    });

    it('Quick view - add to cart', function() {

        //quick view window is an iFrame
        browser.get(browser.baseUrl);
        cart.openQuickView(5);
        browser.sleep(1000);
        browser.switchTo().frame(element(by.css('iframe[class="fancybox-iframe"]')).getWebElement());
        cart.quickViewAddToCartButton.click();
        browser.switchTo().defaultContent();
        browser.sleep(3000);
        cart.cartModalContinueShoppingButton.click();
    }); 
        
})