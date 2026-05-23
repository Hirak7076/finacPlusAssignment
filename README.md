# Playwright UI & API Test Suite

Automated test suite built with **Playwright + JavaScript** covering UI and API automation for the QA Automation Engineer assignment.

---

## Project Structure

```
├── tests/
│   ├── bookstore.spec.js      # UI test — DemoQA Book Store
│   └── user.spec.js           # API tests — Reqres User CRUD
├── pages/
│   └── bookstoreActions.js    # Page Object for Book Store UI actions
├── locators/
│   └── bookstoreLocators.js   # UI element locators
├── services/
│   └── userService.js         # API service layer (Create / Get / Update)
├── payloads/
│   └── userPayload.js         # Request payload builders
├── utils/
│   ├── apiClient.js           # Playwright API request context setup
│   └── fileUtil.js            # Writes book details to output file
├── testData/
│   ├── userData.js            # UI test credentials and book name
│   └── data.json              # API test data (create / update user)
├── output/
│   └── bookDetails.txt        # Book details extracted during UI test run
├── config/
│   └── env.js                 # Environment configuration
└── playwright.config.js       # Playwright configuration (reporter, baseURL)
```

---

## Test Coverage

### UI Test — `bookstore.spec.js`
Target: [https://demoqa.com](https://demoqa.com)

| Step | Description |
|------|-------------|
| 1 | Navigate to DemoQA and open Book Store Application |
| 2 | Login with valid credentials |
| 3 | Validate successful login (username displayed, Logout button visible) |
| 4 | Navigate to the Book Store |
| 5 | Search for a specific book |
| 6 | Validate the book appears in search results |
| 7 | Extract book details (Title, Author, Publisher) |
| 8 | Write extracted details to `output/bookDetails.txt` |
| 9 | Logout |

### API Tests — `user.spec.js`
Target: [https://reqres.in](https://reqres.in)  
Tests run in **serial** order (each depends on the previous).

| Test | Method | Endpoint | Validates |
|------|--------|----------|-----------|
| Create User | POST | `/api/users` | Status 201, response body (name, email, job) |
| Get User | GET | `/api/users/:id` | Correct URL used, status 200 or 404 (mock API limitation) |
| Update User | PUT | `/api/users/:id` | Status 200, updated fields in response |

---

## Setup & Installation

**Prerequisites:** Node.js v16+

```bash
# Clone the repository
git clone https://github.com/Hirak7076/finacPlusAssignment.git
cd finacPlusAssignment

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

---

## Running Tests

```bash
# Run all tests (UI + API)
npx playwright test

# Run only UI tests
npx playwright test tests/bookstore.spec.js

# Run only API tests
npx playwright test tests/user.spec.js

# Run with UI mode (interactive)
npx playwright test --ui

# Run headed (see browser)
npx playwright test tests/bookstore.spec.js --headed
```

---

## Test Report

After running tests, an HTML report is automatically generated:

```bash
# Open the HTML report
npx playwright show-report
```

---

## Technologies Used

- [Playwright](https://playwright.dev/) — UI and API automation
- [Node.js](https://nodejs.org/) — Runtime
- JavaScript (CommonJS)
- Page Object Model (POM) pattern for UI tests
- Service layer pattern for API tests
