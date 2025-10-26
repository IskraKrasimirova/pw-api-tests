import { test, expect } from '@playwright/test';
import tags from '../test-data/tags.json';

test.beforeEach(async ({ page }) => {
  await page.route('*/**/api/tags', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(tags),
    });
  });

  await page.goto('https://conduit.bondaracademy.com/');
  await page.waitForLoadState('networkidle');

  await expect(page.locator('.tag-list .tag-pill', { hasText: 'Playwright' })).toHaveCount(1);
});

test('has title', async ({ page }) => {
  await expect(page.locator('.navbar-brand')).toHaveText("conduit");
});