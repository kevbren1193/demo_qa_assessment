import BasePage from "./base.page";
import BaseAuthPage from "./base.auth.page";

class LoginPage extends BaseAuthPage {

    get loginBtn() {
        return cy.get('#login');
    }

    get newUserBtn() {
        return cy.get('#newUser');
    }

    get welcomeText() {
        return cy.get('[style="margin-bottom: 50px;"]');
    }

    get nameLabel() {
        return cy.get('#name', {timeout: 10000});
    }

}

export default new LoginPage();
