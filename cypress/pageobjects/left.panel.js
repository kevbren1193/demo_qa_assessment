import BasePage from "./base.page";

class LeftPanel extends BasePage {

    get loginItem() {
        return this.leftPanelMenuItem("Login");
    }

    get bookStoreItem() {
        return this.leftPanelMenuItem("Book Store");
    }

    get profileItem() {
        return this.leftPanelMenuItem("Profile");
    }


    leftPanelMenuItem(menuText) {
        return cy.contains('.left-pannel ul.menu-list span', new RegExp('^' + menuText + '$'));
    }


}

export default new LeftPanel();
