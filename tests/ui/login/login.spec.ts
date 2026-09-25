import { test, expect } from '../../../fixtures/test';

test.describe('Login UI', () => {
  test('standard_user can log in successfully', async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/\/inventory\.html$/);
  });

  test('locked_out_user sees a locked-out error and stays logged out', async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');

    await loginPage.expectLoginError('Epic sadface: Sorry, this user has been locked out.');
    await expect(page).not.toHaveURL(/\/inventory\.html$/);
    await expect(page).toHaveURL(/\/$/);
  });
});
