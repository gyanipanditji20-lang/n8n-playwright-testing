
const { test, expect } = require('@playwright/test');

test('Demo website opens successfully', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(
    page.getByText('Swag Labs')
  ).toBeVisible();
});
