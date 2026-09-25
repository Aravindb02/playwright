# Playwright Assignment

This project contains Playwright tests for the SauceDemo UI and ReqRes API.
The tests use Page Objects and shared fixtures to keep the test files simple and readable.

## Getting started

Install the dependencies with:

```bash
npm install
```

The local `.env` file contains the UI and API base URLs. It is ignored by Git; use `.env.example` as a reference when setting up the project.

## Running Tests

Run the complete test suite:

```bash
npx playwright test --project=chromium
```

Run the UI tests only:

```bash
npx playwright test --project=chromium tests/ui
```

Run the API tests only:

```bash
npx playwright test --project=chromium tests/api --no-deps
```

The authentication setup runs automatically before the authenticated UI tests and creates the local storage state used by the products and checkout tests.

## Project layout

- `pages/` contains the UI Page Objects.
- `tests/ui/` contains login, products, and checkout scenarios.
- `tests/api/` contains ReqRes API scenarios.
- `fixtures/` contains the shared Playwright fixtures.
- `clients/` contains the small ReqRes API client.
- `setup/` contains the authentication setup.
