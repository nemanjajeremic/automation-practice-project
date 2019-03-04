let shoppingCart = function () {

    this.cartModal = element(by.id('layer_cart'));
    this.cartModalContinueShoppingButton = element(by.css('span[class*="continue btn btn-default button exclusive-medium"]'));
    this.cartModalProceedToCheckoutButton = element(by.css('a[title="Proceed to checkout"]'));
    this.shoppingCartQuantity = element(by.css('div[class="shopping_cart"] span[class*="ajax_cart_quantity"'));
    this.productContainers = element.all(by.css('div[class*="product-container"]'));
    this.cartItems = element.all(by.css('tr[class*="cart_item"]'));
    this.viewShoppingCart = element(by.css('a[title="View my shopping cart"]'));
    this.productRows = element.all(by.css('tr[class*="cart_item"]'));
    /*     this.cartProceedToCheckoutButton = element(by.css('a[class="button btn btn-default standard-checkout button-medium"]')); */
    this.cartProceedToCheckoutButton1 = element(by.css('a[class*="button btn btn-default standard-checkout button-medium"]'));
    this.quickViewAddToCartButton = element(by.css('p[id="add_to_cart"] button'));

    this.deleteCartItem = function (productRef) {
        this.productRows.each(async function (productRow) {
            let cartItemRef = await productRow.element(by.css('small[class*="cart_ref"]')).getText();
            let deleteButton = await productRow.element(by.css('i[class*="icon-trash"]'));
            if (productRef === cartItemRef) {
                deleteButton.click();
            }
        });
    }

    this.addToCart = function (productIndex) {
        //keep track of products added and convert the value to string
        /*  this.productNumber += 1;
         this.productsInCart = this.productNumber.toString(); */
        //hover over product
        let currentProduct = this.productContainers.get(productIndex);
        browser.actions().mouseMove(currentProduct).perform();
        //find "add to cart" button and click on it
        currentProduct.element(by.css('div[class*="button-container"] a[class="button ajax_add_to_cart_button btn btn-default"] span')).click();
    }

    this.openQuickView = function (productIndex) {
        //keep track of products added and convert the value to string
        /*  this.productNumber += 1;
         this.productsInCart = this.productNumber.toString(); */
        //hover over product
        let currentProduct = this.productContainers.get(productIndex);
        browser.actions().mouseMove(currentProduct).perform();
        //find "add to cart" button and click on it
        currentProduct.element(by.css('a[class="quick-view"]')).click();
    }
}

module.exports = shoppingCart;