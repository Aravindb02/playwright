import { test } from '../../../fixtures/test';

test.describe('Checkout UI', () => {
  test.use({ storageState: 'storage/standardUser.json' });

  test('standard user can complete checkout', async ({ productsPage, cartPage, checkoutPage }) => {
    const expectedProducts = ['Sauce Labs Backpack', 'Sauce Labs Bike Light'];

    await productsPage.goto();
    await productsPage.addProducts(['sauce-labs-backpack', 'sauce-labs-bike-light']);
    await cartPage.openCart();
    await cartPage.expectProducts(expectedProducts);
    await cartPage.clickCheckout();

    await checkoutPage.fillCheckoutInformation('Aravind', 'Test', '576101');
    await checkoutPage.continueToOverview();
    await checkoutPage.expectOverviewDisplayed();
    await checkoutPage.finishOrder();
    await checkoutPage.expectOrderConfirmation();
  });
});
