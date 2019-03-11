let searchPage = function () {
   this.colorButton = element(by.css('label[name="layered_id_attribute_group_13"] a'));
   this.filterViscose = element(by.css('input[id="layered_id_feature_3"]'));
   this.enabledFilters = element.all(by.css('div[id="enabled_filters"] ul li'));
   this.searchResultProduct = element.all(by.css('div[class*="product-container"]'));
   this.categoryName = element(by.className('category-name'));
   this.dressesButton = element.all(by.css('a[title="Dresses"]')).get(1);

}

module.exports = searchPage;