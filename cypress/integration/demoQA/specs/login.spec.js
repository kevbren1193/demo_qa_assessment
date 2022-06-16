import LoginPage from "../../../pageobjects/login.page";
import UserData from "../../../data/userData.json"
import RegisterPage from "../../../pageobjects/register.page";
import ProfilePage from "../../../pageobjects/profile.page";

describe('Login demoQA', () => {
    beforeEach(() => {
        cy.once('uncaught:exception', () => false);
        cy.visit("https://demoqa.com/login");
    })

    it('when login page loads, welcome header should show', () => {
        LoginPage.mainHeader.should("have.text", "Login");
        LoginPage.welcomeText.should("have.text", "Welcome,Login in Book Store");
    });

    it('when click login button with empty data, error should show', () => {
        LoginPage.loginBtn.click();
        LoginPage.username.should("have.class", "is-invalid");
        LoginPage.password.should("have.class", "is-invalid");
    });

    it('when user enter non-existing username or password, then error should show', () => {
        LoginPage.username.type(UserData.Username + Math.random());
        LoginPage.password.type(UserData.Password + Math.random());
        LoginPage.loginBtn.click();
        LoginPage.nameLabel.should("have.text", "Invalid username or password!");
    });

    it('when user click new user, then register page should show', () => {
        LoginPage.newUserBtn.click();
        RegisterPage.registerText.should("have.text", "Register to Book Store")
    });

    it('when user click register without filling any data, then error should show', () => {
        LoginPage.newUserBtn.click();
        RegisterPage.registerBtn.click();
        RegisterPage.username.should("have.class", "is-invalid");
        RegisterPage.password.should("have.class", "is-invalid");
        RegisterPage.lastName.should("have.class", "is-invalid");
        RegisterPage.firstName.should("have.class", "is-invalid");
    });


    it('when user fills data, accept captcha and click Register, then alert should show', () => {
        LoginPage.newUserBtn.click();
        RegisterPage.firstName.type(UserData.FirstName);
        RegisterPage.lastName.type(UserData.LastName);
        RegisterPage.username.type(UserData.Username + Math.random());
        RegisterPage.password.type(UserData.Password);
        RegisterPage.solveCaptchaAndRegister();
        cy.on('window:alert', (t) => {
            expect(t).to.contains('User Register Successfully.');
        })
    });


    it('when user clicks back to login in register page, then login page should show', () => {
        LoginPage.newUserBtn.click();
        RegisterPage.backToLoginBtn.click();
        LoginPage.welcomeText.should("have.text", "Welcome,Login in Book Store");
    });

    it('when user enter correct username and password, then profile page should show with username', () => {
        LoginPage.username.type(UserData.Username);
        LoginPage.password.type(UserData.Password);
        LoginPage.loginBtn.click();
        ProfilePage.mainHeader.should("have.text","Profile");
        ProfilePage.username.should("be.visible").should("have.text", UserData.Username);
    });

});

