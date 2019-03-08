let shoppingCart = require('./cart.page.js');
let globalPage = require('../global/global.page.js');
let loginPage = require('../login/login.page.js');
let homePage = require('../home/home.page.js');
let productPage = require('../product/product.page.js');

describe('My store - cart functionality ', function () {
    /*    let EC = ExpectedConditions; */
    browser.ignoreSynchronization = true;
    let cart = new shoppingCart();
    let product = new productPage();
    let home = new homePage();
    let login = new loginPage();
    let global = new globalPage();

    it('Add one item multiple times', function () {
        browser.get(browser.baseUrl);
        browser.sleep(2000);

        for (let index = 0; index < 3; index++) {
            cart.addToCart('Blouse');
            global.waitUntilVisible(cart.cartModal, 30000);
            cart.cartModalContinueShoppingButton.click();
        }
    });

    it('remove all items from the cart', function () {
        cart.viewShoppingCart.click();
        global.waitUntilVisible(cart.cartTrashIcons.first(), 30000)
        cart.removeAllItems();
        browser.sleep(2000);
        browser.get(browser.baseUrl)
        expect(cart.shoppingCartQuantityNoProduct.isDisplayed()).toBe(true);
    });

    it('Add different items to cart and continue shopping', function () {
        browser.get(browser.baseUrl);
        cart.addToCart('Blouse');
        global.waitUntilVisible(cart.cartModal, 30000);
        cart.cartModalContinueShoppingButton.click();
        browser.sleep(2000);
        cart.addToCart('Printed Chiffon Dress');
        global.waitUntilVisible(cart.cartModal, 30000);
        cart.cartModalContinueShoppingButton.click();
        browser.sleep(3000);
        expect(cart.shoppingCartQuantity.getText()).toEqual('2');
    });

    it('Increase and decrease quantity of the item in cart', function () {
        cart.viewShoppingCart.click();
        cart.increaseItemQuantity('Blouse') // product already in cart, increased to 2 products
        browser.sleep(2000);
        browser.sleep(2000);
        cart.decreaseItemQuantity('Blouse') // decreased to 1 product 
        browser.sleep(2000);
        cart.increaseItemQuantity('Blouse') // increased to 2 products
        browser.sleep(3000);
        //assertion is in the following method
        cart.checkItemQuantity('Blouse', '2');

    });

    it('Click on an item in the cart', function () {
        browser.get(browser.baseUrl);
        cart.viewShoppingCart.click();
        console.log('waiting to click on item')
        browser.sleep(5000);
        cart.clickOnItem('Blouse');
        global.waitUntilVisible(product.productName);
        expect(product.productName.getText()).toEqual('Blouse');

    });

    it('Shopping cart modal closes after clicking on "continue shopping" button', function () {
        browser.get(browser.baseUrl);
        cart.addToCart('Blouse');
        global.waitUntilVisible(cart.cartModal, 30000);
        cart.cartModalContinueShoppingButton.click();
        browser.sleep(500);
        expect(cart.cartModal.isDisplayed()).toBe(false);
    });

    it('Remove product from cart', async function () {

        browser.get(browser.baseUrl);
        cart.addToCart('Blouse');
        global.waitUntilVisible(cart.cartModal, 30000);
        cart.cartModalContinueShoppingButton.click();
        cart.addToCart('Printed Chiffon Dress');
        global.waitUntilVisible(cart.cartModal, 30000);
        cart.cartModalContinueShoppingButton.click();
        cart.viewShoppingCart.click();
        cart.deleteCartItem('Blouse');
        browser.sleep(2000);
        expect(cart.shoppingCartQuantity.getText()).toBe('1');
        
    });

    fit('Add to cart and checkout', function () {
        browser.get(browser.baseUrl);
        cart.addToCart('Blouse');
        global.waitUntilVisible(cart.cartModal, 30000);
        cart.cartModalProceedToCheckoutButton.click();
        cart.cartProceedToCheckoutButton1.click();
    });

    it('Quick view - add to cart', function () {

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