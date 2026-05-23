class BookStoreLocators {

    constructor(page) {

        this.page = page;

        // Home Page
        this.bookStoreApplication =
            page.locator('text=Book Store Application');

        // Login
        this.loginButton =
            page.locator('#login');

        this.usernameInput =
            page.locator('#userName');

        this.passwordInput =
            page.locator('#password');

        this.userNameValue =
            page.locator('#userName-value');

        this.logoutButton =
            page.getByRole('button', { name: /log.?out/i });

        // Book Store
        this.goToBookStoreButton =
            page.locator('text=Go To Book Store');

        this.searchBox =
            page.locator('#searchBox');
    }
}

module.exports = BookStoreLocators;