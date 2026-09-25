import { expect, type Page } from '@playwright/test';

export class CartPage {
  private readonly cartLink;
  private readonly productNames;
  private readonly checkoutButton;

  constructor(private readonly page: Page) {
    this.cartLink = page.getByTestId('shopping-cart-link');
    this.productNames = page.getByTestId('inventory-item-name');
    this.checkoutButton = page.getByRole('button', { name: /checkout/i });
  }

  async openCart() {
    await this.cartLink.click();
  }

  async expectProducts(productNames: string[]) {
    for (const productName of productNames) {
      await expect(this.productNames.filter({ hasText: productName })).toBeVisible();
    }
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }
}
