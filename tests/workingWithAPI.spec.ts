import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Navigate to the starting URL before each test.
  await page.goto('https://conduit.bondaracademy.com/');
});

test('has title', async ({ page }) => {
  await expect(page.locator('.navbar-brand')).toHaveText("conduit");
});