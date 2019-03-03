let registrationPage = function () {

   //personal info
   this.radioGenderMale = element(by.id('uniform-id_gender1'));
   this.radioGenderfemale = element(by.id('id_gender2'));
   this.inputFirstname = element(by.id('customer_firstname'));
   this.inputLastName = element(by.id('customer_lastname'));
   this.inputPassword = element(by.id('passwd'));
   this.calendarDay = element(by.id('days'));
   this.calendarMonth = element(by.id('months'));
   this.calendarYear = element(by.id('years'));
   this.checkboxNewsletter = element(by.id('newsletter'));
   this.checkboxPromotions = element(by.id('optin'));

   //address info
   this.inputAddressFirstname = element(by.id('firstname'));
   this.inputAddressLastName = element(by.id('lastname'));
   this.inputAddress = element(by.id('address1'));
   this.inputAddressCity = element(by.id('city'));
   this.inputAddressState = element(by.id('id_state'));
   this.inputAddressZip = element(by.id('postcode'));
   this.inputAddressCountry = element(by.id('id_country'));
   this.inputAddressMobilePhone = element(by.id('phone_mobile'));
   this.inputAddressAlias = element(by.id('alias'));

   this.submitRegistrationButton = element(by.id('submitAccount'));

}

module.exports = registrationPage;