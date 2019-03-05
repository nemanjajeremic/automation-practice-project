let shoppingCart = require('./cart.page.js');
let globalPage = require('../global/global.page.js');
let loginPage = require('../login/login.page.js');
let homePage = require('../home/home.page.js');

describe('My store - cart functionality |', function () {
    /*    let EC = ExpectedConditions; */
    browser.ignoreSynchronization = true;
    let cart = new shoppingCart();
    let home = new homePage();
    let login = new loginPage();
    let global = new globalPage();

    fit('Add one item to cart and continue shopping', function () {
        browser.get(browser.baseUrl);
        cart.addToCart('Blouse');
        global.waitUntilVisible(cart.cartModal, 30000);
        cart.cartModalContinueShoppingButton.click();
        cart.addToCart('Printed Chiffon Dress');
        global.waitUntilVisible(cart.cartModal, 30000);
        cart.cartModalContinueShoppingButton.click();
        cart.addToCart('Printed Summer Dress');
        global.waitUntilVisible(cart.cartModal, 30000);
        cart.cartModalContinueShoppingButton.click();
        browser.sleep(3000);
        expect(cart.shoppingCartQuantity.getText()).toEqual('1');
    });

    it('Increase and decrease quantity of the item in cart', function () {
        cart.viewShoppingCart.click();
        cart.increaseItemQuantity('Blouse')
        browser.sleep(2000);
        cart.checkItemQuantity('Blouse');
        browser.sleep(2000);
        cart.decreaseItemQuantity('Blouse')
        browser.sleep(2000);
        cart.increaseItemQuantity('Blouse')
        browser.sleep(2000);
        cart.checkItemQuantity('Blouse');
        browser.sleep(3000);

    });

    /*   fit('Add item(s) to the cart, close the browser and reopen the same site', async function () {
          browser.get(browser.baseUrl);
          global.waitUntilVisible(home.bestsellersButton, 30000)
          cart.addToCart('Blouse');
          global.waitUntilVisible(cart.cartModal, 30000);
          cart.cartModalContinueShoppingButton.click();
       
      }); */

    fit('remove all items from the cart', function () {
      
        cart.viewShoppingCart.click();
        global.waitUntilVisible(cart.cartTrashIcons.first(), 30000)
        cart.removeAllItems();
        browser.sleep(2000);
        expect(cart.shoppingCartQuantity.getText()).toEqual('empty');
    });

    //TODO
    /*     Add multiple items of different types 
        Remove all items from the cart 
        Click on an item in the cart
        Add item(s) to the cart, close the browser and reopen the same site */

    it('Shopping cart modal closes after clicking on "continue shopping" button', function () {
        cart.addToCart('Blouse');
        global.waitUntilVisible(cart.cartModal, 30000);
        cart.cartModalContinueShoppingButton.click();
        browser.sleep(500);
        expect(cart.cartModal.isDisplayed()).toBe(false);
    });

    it('Remove product from cart', function () {

        browser.get(browser.baseUrl);
        cart.addToCart('Blouse');

        global.waitUntilVisible(cart.cartModal, 30000);
        cart.cartModalContinueShoppingButton.click();
        cart.addToCart('Printed Chiffon Dress');
        global.waitUntilVisible(cart.cartModal, 30000);
        cart.cartModalContinueShoppingButton.click();
        cart.viewShoppingCart.click();
        cart.deleteCartItem('Blouse');
        browser.sleep(10000);
        /*  if (login.signOutButton.isDisplayed()) {
             login.signOutButton.click();
         } */

        /*   expect(cart.shoppingCartQuantity.getText()).toEqual('1'); */
    });

    it('Add to cart and checkout', async function () {
        browser.get(browser.baseUrl);
        /*    login.signOutButton.click(); */
        /*   home.signInButton.click();
          login.logIn(); */
        browser.get(browser.baseUrl);
        cart.addToCart('Blouse');
        global.waitUntilVisible(cart.cartModal, 30000);
        cart.cartModalProceedToCheckoutButton.click();
        browser.sleep(2000);
        cart.cartProceedToCheckoutButton1.click();
        /*    global.waitUntilVisible(cart.cartProceedToCheckoutButton, 30000);
           cart.cartProceedToCheckoutButton.click();
           global.waitUntilVisible(cart.cartProceedToCheckoutButton, 30000);
           cart.cartProceedToCheckoutButton.click(); */
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