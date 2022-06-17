import BasePage from "./base.page";

class ProfilePage extends BasePage {

    get username() {
        return cy.get(".form-label#userName-value");
    }

    get noLoginLabel(){
        return cy.get("#notLoggin-label");
    }

    get loginLink(){
        return this.noLoginLabel.get('[href="/login"]');
    }

}

export default new ProfilePage();
