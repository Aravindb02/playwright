import { test as base } from '@playwright/test';
import { UsersClient } from '../clients/reqres/users.client';
import { CartPage } from '../pages/cart/cart.page';
import { CheckoutPage } from '../pages/checkout/checkout.page';
import { LoginPage } from '../pages/login/login.page';
import { ProductsPage } from '../pages/products/products.page';

type Fixtures = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  usersClient: UsersClient;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  usersClient: async ({ request }, use) => {
    await use(new UsersClient(request));
  },
});

export { expect } from '@playwright/test';
