import { test, expect } from '@playwright/test';
import { CartPage } from '../../../pages/cart/cart.page';
import { CheckoutPage } from '../../../pages/checkout/checkout.page';
import { ProductsPage } from '../../../pages/products/products.page';

test.describe('Checkout UI', () => {
  test.use({ storageState: 'storage/standardUser.json' });

  test('standard user can complete checkout', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const expectedProducts = ['Sauce Labs Backpack', 'Sauce Labs Bike Light'];

    await productsPage.goto();
    await productsPage.addProducts(['sauce-labs-backpack', 'sauce-labs-bike-light']);
    await cartPage.openCart();
    await cartPage.expectProducts(expectedProducts);
    await cartPage.clickCheckout();

    await checkoutPage.fillCheckoutInformation('Aravind', 'Test', '576101');
    await checkoutPage.continueToOverview();
    await expect(page.getByText('Checkout: Overview', { exact: true })).toBeVisible();
    await checkoutPage.finishOrder();
    await checkoutPage.expectOrderConfirmation();
  });
});
