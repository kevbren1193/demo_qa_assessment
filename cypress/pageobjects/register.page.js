import BasePage from "./base.page";
import BaseAuthPage from "./base.auth.page";

class RegisterPage extends BaseAuthPage {

    get registerText() {
        return cy.get('[style="margin-bottom: 50px;"]>h4');
    }

    get firstName() {
        return cy.get('#firstname');
    }

    get lastName() {
        return cy.get('#lastname');
    }

    get registerBtn() {
        return cy.get('#register');
    }

    get backToLoginBtn() {
        return cy.get('#gotologin');
    }


    solveCaptchaAndRegister(){
        cy.solveCaptcha();
        cy.wait(1000);
        this.registerBtn.click();
    }

}

export default new RegisterPage();
