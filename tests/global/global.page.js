let globalPage = function () {
    
    this.waitUntilVisible = function (element, timeout) {
        let EC = ExpectedConditions;
        let isVisible = EC.visibilityOf(element);
        browser.wait(isVisible, timeout);
    }
}

module.exports = globalPage;