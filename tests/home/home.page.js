let homePage = function () {

    this.searchInput = element(by.id('search_query_top'));
    this.searchButton = element(by.css('button[class*="button-search"]'));
    this.alertWarning = element(by.css('p[class="alert alert-warning"]'));
    this.bestSellersButton = element(by.css('a[class="blockbestsellers"]'));
    /* 
        this.productContainers = element.all(by.css('div[class*="product-container"]'));
        this.productNames = element.all(by.css('a[class*="product-name"]')); */

}

module.exports = homePage;