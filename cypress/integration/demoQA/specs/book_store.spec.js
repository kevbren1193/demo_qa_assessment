import LoginPage from "../../../pageobjects/login.page";
import UserData from "../../../data/userData.json"
import ProfilePage from "../../../pageobjects/profile.page";
import BookStorePage from "../../../pageobjects/book_store.page";
import BooksData from "../../../data/books.json"
import LeftPanel from "../../../pageobjects/left.panel";

describe('Bookstore demoQA', () => {
    beforeEach(() => {
        cy.once('uncaught:exception', () => false);
        cy.visit("https://demoqa.com/books");
    })

    after(() => {
        //todo add after all
    })

    it('when user loads books page, book header should show, table should show and should contain books', () => {
        BookStorePage.mainHeader.should("have.text","Book Store");
        BookStorePage.booksTable.should("be.visible");
        const bookTitle = BooksData[2].Title
        BookStorePage.bookTableTitle(bookTitle).should("be.visible").should("have.text", bookTitle);
    });

    it('when user search for a book, then books table should be filtered', () => {
        const bookTitle = BooksData[3].Title
        BookStorePage.searchBox.type(bookTitle);
        BookStorePage.bookTableTitle(bookTitle).should("have.text", bookTitle)
    });

    it('when user clicks a book title, book details page should show', () => {
        cy.once('uncaught:exception', () => false);
        const bookTitle = BooksData[2].Title
        BookStorePage.bookTableTitle(bookTitle).scrollIntoView().click({force: true});
        BookStorePage.bookDetailsTitle.should("have.text", bookTitle)
    });

    it('when user logs in, then user can add book to collection', () => {
        cy.once('uncaught:exception', () => false);
        const bookTitle = BooksData[0].Title
        BookStorePage.bookTableTitle(bookTitle).scrollIntoView().click({force: true});
        BookStorePage.loginBtn.click();
        LoginPage.username.type(UserData.Username);
        LoginPage.password.type(UserData.Password);
        LoginPage.loginBtn.click();
        BookStorePage.addToCollectionBtn.should("be.visible").click({force: true});
        LeftPanel.profileItem.click();
        ProfilePage.booksTable.should("be.visible");
        ProfilePage.bookTableTitle(bookTitle).should("be.visible").should("have.text", bookTitle);
    });

});

