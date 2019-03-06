let searchPage = function () {
   this.colorButton = element(by.css('label[name="layered_id_attribute_group_13"]'));
   this.enabledFilters = element.all(by.css('div[id="enabled_filters"] ul li a'));
   this.searchResultProduct = element.all(by.css('div[class="product-container"]'));

   this.printFilters = function () {
      this.enabledFilters.each(async function (filter) {
         console.log(await filter.getText());
      })
   }

}

module.exports = searchPage;