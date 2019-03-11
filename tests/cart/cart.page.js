let shoppingCart = function () {

    this.cartModal = element(by.id('layer_cart'));
    this.cartModalContinueShoppingButton = element(by.css('span[class*="continue btn btn-default button exclusive-medium"]'));
    this.cartModalProceedToCheckoutButton = element(by.css('a[title="Proceed to checkout"]'));
    this.shoppingCartQuantity = element(by.css('div[class="shopping_cart"] span[class*="ajax_cart_quantity"]'));
    this.shoppingCartQuantityNoProduct = element(by.css('div[class="shopping_cart"] span[class="ajax_cart_no_product"]'));
    this.productContainers = element.all(by.css('div[class*="product-container"]'));
    this.cartItems = element.all(by.css('tr[class*="cart_item"]'));
    this.viewShoppingCart = element(by.css('a[title="View my shopping cart"]'));
    this.productRows = element.all(by.css('tr[class*="cart_item"]'));
    this.cartProceedToCheckoutButton1 = element(by.css('a[class*="button btn btn-default standard-checkout button-medium"]'));
    this.cartProceedToCheckoutAddressButton = element(by.css('button[name="processAddress"]'));
    this.termsOfServiceCheckbox = element(by.id('cgv'));
    this.cartProceedToCheckoutShippingButton = element(by.css('button[name="processCarrier"]'));
    this.payByBankWire = element(by.className('bankwire'));
    this.confirmOrderButton = element(by.css('p[id="cart_navigation"] button[type="submit"]'));
    this.orderConfirmationMessage = element(by.css('div[class="box"] p[class="cheque-indent"]'));
    this.quickViewAddToCartButton = element(by.css('p[id="add_to_cart"] button'));
    this.itemQuantity = element.all(by.css('input[class="cart_quantity_input form-control grey"]'));
    this.cartTrashIcons = element.all(by.css('a[class="cart_quantity_delete"]'));

    this.addToCart = function (productName, callback) {
        let currentItem;
        this.productContainers.each(async function (item) {
            let itemName = await item.element(by.css('a[class="product-name"]')).getText();
            if (productName === itemName) {
                currentItem = item;
                browser.actions().mouseMove(currentItem).perform();
                let addToCartButton = await currentItem.element(by.css('a[class="button ajax_add_to_cart_button btn btn-default"]'));
                await addToCartButton.click();

            }
        })
        //TODO - this is the current workaround if callback is not provided 
        if (callback) {
            callback(this.cartModal, 30000);
            this.cartModalContinueShoppingButton.click();
        }
        browser.sleep(2000);

    }

    this.addMultipleProducts = function (productName, amount, callback) {
        for (let index = 0; index < amount; index++) {
            this.addToCart(productName, callback);
            callback(this.cartModal, 30000);
            this.cartModalContinueShoppingButton.click();
        }
    }

    this.deleteCartItem = function (productName) {
        this.productRows.each(async function (productRow) {
            let cartItemName = await productRow.element(by.css('p[class="product-name"] a')).getText();
            let deleteButton = await productRow.element(by.css('i[class*="icon-trash"]'));
            if (productName === cartItemName) {
                deleteButton.click();
            }
        });
        browser.sleep(2000);
    }

    this.clickOnItem = async function (productName) {
        await this.productRows.each(async function (productRow) {
            let cartItem = await productRow.element(by.css('p[class="product-name"] a'));
            if (productName === await cartItem.getText()) {
                cartItem.click();
            }
        });
    }

    this.increaseItemQuantity = async function (productName) {
        await this.productRows.each(async function (productRow) {
            let cartItemName = await productRow.element(by.css('p[class="product-name"] a')).getText();
            let increaseQuantityButton = await productRow.element(by.css('a[class="cart_quantity_up btn btn-default button-plus"]'));
            if (productName === cartItemName) {
                increaseQuantityButton.click();
            }
        });
        browser.sleep(3000);
    }

    this.decreaseItemQuantity = function (productName) {
        this.productRows.each(async function (productRow) {
            let cartItemName = await productRow.element(by.css('p[class="product-name"] a')).getText();
            let decreaseQuantityButton = await productRow.element(by.css('a[class="cart_quantity_down btn btn-default button-minus"]'));
            if (productName === cartItemName) {
                decreaseQuantityButton.click();
            }
        });
        browser.sleep(3000);
    }

    this.checkItemQuantity = async function (productName /* , noOfProducts */ ) {
        let currentRow;
        let quantityValue;
        await this.productRows.each(async function (productRow) {
            let cartItemName = await productRow.element(by.css('p[class="product-name"] a')).getText();
            if (productName === cartItemName) {
                currentRow = productRow;
            }
            quantityValue = await currentRow.element(by.css('input[class="cart_quantity_input form-control grey"]')).getAttribute('value');
        });

        return await quantityValue;
    }

    this.removeAllItems = function () {
        this.viewShoppingCart.click();
        /*  global.waitUntilVisible(cart.cartTrashIcons.first(), 30000) */
        this.cartTrashIcons.each(async function (trashIcon) {
            trashIcon.click();
        });
        browser.sleep(2000);
    }
    //TODO - fix to work with product name - NOT index
    this.openQuickView = function (productIndex) {
        let currentProduct = this.productContainers.get(productIndex);
        browser.actions().mouseMove(currentProduct).perform();
        currentProduct.element(by.css('a[class="quick-view"]')).click();
    }

    //TODO - ???
    this.findItemInCart = function (productName) {
        let x = false;
        this.productRows.each(async function (productRow) {
            let cartItemName = await productRow.element(by.css('p[class="product-name"] a')).getText();
            if (productName === cartItemName) {
                x = true;
                return x;
            }
        });

        return x;
    }

    this.addViaQuickView = function (productIndex) {
        this.openQuickView(productIndex);
        browser.sleep(1000);
        browser.switchTo().frame(element(by.css('iframe[class="fancybox-iframe"]')).getWebElement());
        this.quickViewAddToCartButton.click();
        browser.switchTo().defaultContent();
        browser.sleep(3000);
        this.cartModalContinueShoppingButton.click();
    }

}

module.exports = shoppingCart;