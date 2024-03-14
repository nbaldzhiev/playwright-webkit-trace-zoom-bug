import { test, expect } from '@playwright/test'

test('foo', async ({ page }) => {
  await page.goto('https://coffee-cart.app/')
  await expect(page).toHaveURL('foo')
})

