let registrationPage = function () {
   let firstNameValue = 'Nemanja';
   let lastNameValue = 'Jeremic';

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
   this.email = `nemanja${Math.floor(Math.random()*90000) + 1000000}@nemanja.com`;

   this.enterUserData = function () {
      this.radioGenderMale.click();
      this.inputFirstname.sendKeys(firstNameValue);
      this.inputLastName.sendKeys(lastNameValue);
      this.inputPassword.sendKeys('nemanja123');
      this.calendarDay.sendKeys('22');
      this.calendarMonth.sendKeys('July');
      this.calendarYear.sendKeys('1991');
      this.checkboxNewsletter.click();
      this.checkboxPromotions.click();
      //enter address info
      this.inputAddressFirstname.sendKeys(firstNameValue);
      this.inputAddressLastName.sendKeys(lastNameValue);
      this.inputAddress.sendKeys('KK 65');
      this.inputAddressCity.sendKeys('BG');
      this.inputAddressState.sendKeys('Alabama');
      this.inputAddressZip.sendKeys('00000');
      this.inputAddressCountry.sendKeys('United States');
      this.inputAddressMobilePhone.sendKeys('111222333');
      this.inputAddressAlias.sendKeys('Main Address');

   }

}

module.exports = registrationPage;