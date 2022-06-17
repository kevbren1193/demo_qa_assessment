import BasePage from "./base.page";
import LoginPage from "./login.page";

class BookStorePage extends BasePage {



    get addToCollectionBtn() {
        return cy.get(".text-right > #addNewRecordButton")
    }

    get backToBookStoreBtn() {
        return cy.get(".text-left > #addNewRecordButton")
    }

    get bookDetailsTitle(){
        return cy.get("#title-wrapper #userName-value")
    }

    get searchBox(){
        return cy.get("#searchBox");
    }

    get loginBtn(){
        return LoginPage.loginBtn;
    }


}

export default new BookStorePage();
