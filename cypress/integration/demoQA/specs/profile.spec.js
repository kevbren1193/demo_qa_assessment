import LoginPage from "../../../pageobjects/login.page";
import UserData from "../../../data/userData.json"
import ProfilePage from "../../../pageobjects/profile.page";
import BookStorePage from "../../../pageobjects/book_store.page";
import BooksData from "../../../data/books.json"
import LeftPanel from "../../../pageobjects/left.panel";

describe('Profile demoQA', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', () => false);
        cy.visit("https://demoqa.com/profile");
    })

    it('when user loads profile page without login, profile header should show, and not login message should show', () => {
        cy.on('uncaught:exception', () => false);
        ProfilePage.mainHeader.should("have.text","Profile");
        ProfilePage.noLoginLabel.should("be.visible").should("have.text", "Currently you are not logged into the Book Store application, please visit the login page to enter or register page to register yourself.");
        ProfilePage.loginLink.click();
        LoginPage.mainHeader.should("have.text", "Login");
        LoginPage.welcomeText.should("have.text", "Welcome,Login in Book Store");
    });

    it('when user loads profile page without login, and click login link, login page should show', () => {
        cy.on('uncaught:exception', () => false);
        ProfilePage.loginLink.click();
        LoginPage.mainHeader.should("have.text", "Login");
        LoginPage.welcomeText.should("have.text", "Welcome,Login in Book Store");
    });

    it('when logged user goes to profile page, should be able to see added books', () => {
        cy.on('uncaught:exception', () => false);
        const title = BooksData[3].Title
        LeftPanel.bookStoreItem.click()
        BookStorePage.loginBtn.click();
        LoginPage.username.type(UserData.Username);
        LoginPage.password.type(UserData.Password);
        LoginPage.loginBtn.click();
        BookStorePage.bookTableTitle(BooksData[3].Title).scrollIntoView().click({force: true});
        BookStorePage.addToCollectionBtn.should("be.visible").click({force: true});
        LeftPanel.profileItem.click();
        ProfilePage.booksTable.should("be.visible");
        ProfilePage.bookTableTitle(title).should("be.visible").should("have.text", title);
    });


    it('when in profile page, user should be able to remove added book, the book should be removed from table', () => {
        cy.on('uncaught:exception', () => false)
        const title = BooksData[1].Title
        LeftPanel.bookStoreItem.click()
        BookStorePage.loginBtn.click();
        LoginPage.username.type(UserData.Username);
        LoginPage.password.type(UserData.Password);
        LoginPage.loginBtn.click();
        BookStorePage.bookTableTitle(title).scrollIntoView().click({force: true});
        BookStorePage.addToCollectionBtn.should("be.visible").click({force: true});
        LeftPanel.profileItem.click();
        ProfilePage.booksTable.should("be.visible");
        ProfilePage.bookTableTitle(title).should("be.visible").should("have.text", title);
        ProfilePage.clickRemoveButton(title);
        ProfilePage.modalDelete.should("be.visible");
        ProfilePage.acceptDeleteButton.click();
        ProfilePage.bookTableTitle(title).should("not.exist");
    });

});

