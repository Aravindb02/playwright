import { expect, type Page } from '@playwright/test';

export class ProductsPage {
  private readonly page: Page;
  private readonly pageTitle;
  private readonly sortDropdown;
  private readonly cartBadge;
  private readonly cartButton;
  private readonly productPrices;

  constructor(page: Page) {
    this.pageTitle = page.getByText('Products', { exact: true });
    this.sortDropdown = page.getByTestId('product-sort-container');
    this.cartBadge = page.getByTestId('shopping-cart-badge');
    this.cartButton = page.getByTestId('shopping-cart-link');
    this.productPrices = page.getByTestId('inventory-item-price');
    this.page = page;
  }

  async goto() {
    await this.page.goto('/inventory.html');
  }

  async expectPageLoaded() {
    await expect(this.pageTitle).toBeVisible();
  }

  async addProduct(productId: string) {
    await this.page.getByTestId(`add-to-cart-${productId}`).click();
  }

  async addProducts(productIds: string[]) {
    for (const productId of productIds) {
      await this.addProduct(productId);
    }
  }

  async sortByPriceLowToHigh() {
    await this.sortDropdown.selectOption('lohi');
  }

  async getProductPrices(): Promise<number[]> {
    const prices = await this.productPrices.allTextContents();
    return prices.map((price) => Number(price.replace('$', '')));
  }

  async expectCartCount(count: number) {
    await expect(this.cartBadge).toHaveText(String(count));
  }

  async openCart() {
    await this.cartButton.click();
  }
}
