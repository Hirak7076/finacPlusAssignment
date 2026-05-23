const { expect } = require('@playwright/test');

const BookStoreLocators =
    require('../locators/bookstoreLocators');

class BookStoreActions {

    constructor(page) {

        this.page = page;

        this.locators =
            new BookStoreLocators(page);
    }

    async navigateToApplication() {

        await this.page.goto(
            'https://demoqa.com/'
        );
    }

    async openBookStoreApplication() {

        await this.locators.bookStoreApplication
            .scrollIntoViewIfNeeded();

        await this.locators.bookStoreApplication
            .click();
    }

    async clickLoginButton() {

        await this.locators.loginButton.click();
    }

    async login(username, password) {

        await this.locators.usernameInput
            .fill(username);

        await this.locators.passwordInput
            .fill(password);

        await this.locators.loginButton.click();
    }

    async validateSuccessfulLogin(username) {

        await expect(
            this.locators.userNameValue
        ).toHaveText(username);

        await expect(
            this.locators.logoutButton
        ).toHaveText('Logout');
    }

    async clickGoToBookStore() {

        await this.locators.goToBookStoreButton
            .click();

        await this.page.waitForURL('**/books');
    }

    async searchBook(bookName) {

        await this.page.locator('table tbody tr')
            .first()
            .waitFor({ state: 'visible' });

        await this.locators.searchBox
            .fill(bookName);
    }

    async validateBook(bookName) {

        const bookRow =
            this.page.locator('table tbody tr')
                .filter({
                    hasText: bookName
                });

        await expect(bookRow)
            .toContainText(bookName);
    }

    async getBookDetails(bookName) {

        const bookRow =
            this.page.locator('table tbody tr')
                .filter({
                    hasText: bookName
                });

        const title =
            await bookRow.locator('a')
                .textContent();

        const author =
            await bookRow.locator('td')
                .nth(2)
                .textContent();

        const publisher =
            await bookRow.locator('td')
                .nth(3)
                .textContent();

        return {
            title,
            author,
            publisher
        };
    }

    async logout() {

        await this.locators.logoutButton
            .click();
    }
}

module.exports = BookStoreActions;