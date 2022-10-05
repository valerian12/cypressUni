class registrationPage {

    elements = {
        registrationForm: () => cy.xpath("//div[@data-test-name='registration-kmf-mini-app']//form"),
        stepOneBubble: () => cy.xpath("(//div[@data-test-name='progress-bar-bubble'])[1]"),
        stepTwoBubble: () => cy.xpath("(//div[@data-test-name='progress-bar-bubble'])[2]"),
        firstNameInput: () => cy.xpath("(//input[@data-test-name='firstName-input-field'])"),
        lastNameInput: () => cy.xpath("(//input[@data-test-name='lastName-input-field'])"),
        emailInput: () => cy.xpath("(//input[@data-test-name='email-input-field'])"),
        passwordInput: () => cy.xpath("(//input[@data-test-name='password-input-field'])"),
        dateSelect: () => cy.xpath("(//select[@data-test-name='dropdown-dateVal'])"),
        monthSelect: () => cy.xpath("(//select[@data-test-name='dropdown-monthVal'])"),
        yearSelect: () => cy.xpath("(//select[@data-test-name='dropdown-yearVal'])"),
        genderSelect: () => cy.xpath("(//select[@data-test-name='gender-drop-down'])"),
        continueButton: () => cy.xpath("//button[@data-dn='Button']"),
        emailValidationMessage: () => cy.xpath("//div[@data-test-name='email-error-message']")
    }
    fewMoreDetails = {
        registrationForm: () => cy.xpath("//div[@data-test-name='registration-kmf-mini-app']//form"),
        joinButton: () => cy.xpath("//button[@data-test-name='submit-button']"),
        postCodeInput: () => cy.xpath("//input[@data-test-name='lookupSearch-lookup']"),
        enterManuallyLink: () => cy.xpath("//a[@data-dn='TextLink']").first(),
        addressInput: () => cy.xpath("//input[@data-test-name='street-input-field']"),
        zipCodeInput: () => cy.xpath("//input[@data-test-name='postalCode-input-field']"),
        cityInput: () => cy.xpath("//input[@data-test-name='city-input-field']"),
        mobileInput: () => cy.xpath("//input[@data-test-name='phoneNumber-input-field']"),
        termsAndCoditionsCheckbox: () => cy.xpath("//input[@name='termsAndConditions']"),
    }
    promotion = {
        promotions: () => cy.xpath("//div[@data-dn='bonus-offer']"),
        iWantThisOfferButton: () => cy.xpath("//button[@data-test-name='submit-button']"),
        skipButton: () => cy.xpath("//a[@data-test-name='skip-welcome-bonus-offer-link']"),
    }
}

module.exports = new registrationPage();
require("cypress-xpath")