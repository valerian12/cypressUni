class anyPage {

    cookies_dialog = {
        allowAllCookiesButton: () => cy.xpath("//button[@id='CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll']")
    }

}

module.exports = new anyPage();
require("cypress-xpath")