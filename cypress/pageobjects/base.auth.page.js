import BasePage from "./base.page";

export default class BaseAuthPage extends BasePage {

    get username() {
        return cy.get('#userName');
    }

    get password() {
        return cy.get('#password');
    }
}
