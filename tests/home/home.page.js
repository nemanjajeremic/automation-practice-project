let homePage = function () {
    this.productsInCart = '';
    this.productNumber = 0;

    this.searchInput = element(by.id('search_query_top'));
    this.searchButton = element(by.css('button[class*="button-search"]'));
    this.alertWarning = element(by.css('p[class="alert alert-warning"]'));
    this.bestsellersButton = element(by.css('a[class="blockbestsellers"]'));
    this.cartModal = element(by.id('layer_cart'));
    this.homepageTabs = element.all(by.css('ul[id="home-page-tabs"] li'));
    this.bestSellerTab = this.homepageTabs.get(1)
    this.continueShoppingButton = element(by.css('span[class*="continue btn btn-default button exclusive-medium"]'));
    this.shoppingCartQuantity = element(by.css('div[class="shopping_cart"] span[class*="ajax_cart_quantity"'));
    this.productContainers = element.all(by.css('div[class*="product-container"]'));
    this.productNames = element.all(by.css('a[class*="product-name"]'));

    this.waitUntilVisible = function (element, timeout) {
        let EC = ExpectedConditions;
        let isVisible = EC.visibilityOf(element);
        browser.wait(isVisible, timeout);
    }

    this.addToCart = function (productIndex) {
        //keep track of products added and convert the value to string
        this.productNumber += 1;
        this.productsInCart = this.productNumber.toString();
        //hover over product
        let currentProduct = this.productContainers.get(productIndex);
        browser.actions().mouseMove(currentProduct).perform();
        //find "add to cart" button and click on it
        currentProduct.element(by.css('div[class*="button-container"] a[class="button ajax_add_to_cart_button btn btn-default"] span')).click();

    }

}

module.exports = homePage;