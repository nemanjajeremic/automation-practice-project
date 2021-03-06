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
    this.quickViewAddToCartButton = element(by.css('p[id="add_to_cart"] button'));
    this.itemQuantity = element.all(by.css('input[class="cart_quantity_input form-control grey"]'));
    this.cartTrashIcons = element.all(by.css('a[class="cart_quantity_delete"]'));
    this.addressCheckoutButton = element(by.css('button[name="processAddress"]'));
    this.shippingCheckbox = element(by.css('input[id="cgv"]'));
    this.shippingCheckoutButton = element(by.css('button[name="processCarrier"]'));
    this.paymentByWireButton = element(by.css('a[class="bankwire"]'));
    this.paymentConfirmOrder = element(by.partialButtonText('I confirm my order'));
    this.orderConfirmationMessage = element(by.css('p[class="cheque-indent"]'));

    this.addToCart = function (productName) {
        let currentItem;
        this.productContainers.each(async function (item) {
            let itemName = await item.element(by.css('a[class="product-name"]')).getText();
            if (productName === itemName) {
                currentItem = item;
                browser.actions().mouseMove(currentItem).perform();
                let addToCartButton = await currentItem.element(by.css('a[class="button ajax_add_to_cart_button btn btn-default"]'));
                addToCartButton.click();
            }
        })

    }

    this.addMultipleProducts = function (productName, amount, callback) {
        browser.sleep(1000);
        for (let index = 0; index < amount; index++) {
            this.addToCart(productName);
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
    }

    this.clickOnItem = function (productName) {
        this.productRows.each(async function (productRow) {
            let cartItem = await productRow.element(by.css('p[class="product-name"] a'));
            if (productName === await cartItem.getText()) {
                cartItem.click();
            }
        });
    }

    this.increaseItemQuantity = function (productName) {
        this.productRows.each(async function (productRow) {
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

    this.checkItemQuantity = function (productName, noOfProducts) {
        let currentRow;
        this.productRows.each(async function (productRow) {
            let cartItemName = await productRow.element(by.css('p[class="product-name"] a')).getText();
            if (productName === cartItemName) {
                currentRow = productRow;
            }
            quantityValue = await currentRow.element(by.css('input[class="cart_quantity_input form-control grey"]')).getAttribute('value');
            expect(await quantityValue).toEqual(noOfProducts);
        });
    }

    this.removeAllItems = function () {
        this.viewShoppingCart.click();
        /*  global.waitUntilVisible(cart.cartTrashIcons.first(), 30000) */
        this.cartTrashIcons.each(async function (trashIcon) {
            trashIcon.click();
        })
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

}

module.exports = shoppingCart;