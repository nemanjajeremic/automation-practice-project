let homePage = function () {
    this.searchInput = element(by.id('search_query_top'));
    this.searchButton = element(by.css('button[class*="button-search"]'));
    this.alertWarning = element(by.css('p[class="alert alert-warning"]'));
    this.productContainers = element.all(by.css('div[class*="product-container"]'));
    this.productNames = element.all(by.css('a[class*="product-name"]'));

    this.logNames = function () {
        this.productNames.each(function (productName) {
            console.log(productName.getText())
        })
    }

}

module.exports = homePage;