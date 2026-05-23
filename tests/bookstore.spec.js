const { test } = require('@playwright/test');

const BookStoreActions =
    require('../pages/bookstoreActions');

const FileUtil =
    require('../utils/fileUtil');

const userData =
    require('../testData/userData');

test(
    'Validate Book Store Application',
    async ({ page }) => {

        const bookStore =
            new BookStoreActions(page);

        // Navigate
        await bookStore.navigateToApplication();

        // Open Book Store
        await bookStore.openBookStoreApplication();

        // Login
        await bookStore.clickLoginButton();

        await bookStore.login(
            userData.username,
            userData.password
        );

        // Validate Login
        await bookStore.validateSuccessfulLogin(
            userData.username
        );

        // Go To Book Store
        await bookStore.clickGoToBookStore();

        // Search Book
        await bookStore.searchBook(
            userData.bookName
        );

        // Validate Book
        await bookStore.validateBook(
            userData.bookName
        );

        // Get Book Details
        const bookDetails =
            await bookStore.getBookDetails(
                userData.bookName
            );

        // Write To File
        FileUtil.writeBookDetails(
            bookDetails
        );

        // Logout
        await bookStore.logout();
    }
);