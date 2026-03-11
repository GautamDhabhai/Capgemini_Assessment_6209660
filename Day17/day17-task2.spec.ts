import {test} from '../playwright/node_modules/@playwright/test'

test("day17 task2", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  let username = await page.locator("#user-name");
  let password = await page.locator("#password");
  let login = await page.locator("#login-button");
  await username.fill("standard_user");
  await password.fill("secret_sauce");
  await login.click();

  let select = await page
    .locator('//select[@class="product_sort_container"]')
    .selectOption({ value: "az" });
  let firstItem = await page
    .locator('//div[@class="inventory_item"]//img')
    .first()
    .click();
  let add_to_cart = await page.locator("#add-to-cart").click();
  let cart = await page.locator('//a[@class="shopping_cart_link"]').click();
});