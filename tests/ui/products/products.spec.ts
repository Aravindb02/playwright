import { test, expect } from '../../../fixtures/test';

test.describe('Products UI', () => {
  test.use({ storageState: 'storage/standardUser.json' });

  test('adds two products and shows cart badge count 2', async ({ productsPage }) => {
    await productsPage.goto();
    await productsPage.expectPageLoaded();
    await productsPage.addProducts(['sauce-labs-backpack', 'sauce-labs-bike-light']);

    await productsPage.expectCartCount(2);
  });

  test('sorts products by lowest price first', async ({ productsPage }) => {
    await productsPage.goto();
    await productsPage.expectPageLoaded();
    await productsPage.sortByPriceLowToHigh();

    const prices = await productsPage.getProductPrices();
    const minPrice = Math.min(...prices);

    expect(prices[0]).toBe(minPrice);
  });
});
