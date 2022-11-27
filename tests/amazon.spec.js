import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    await page.goto("https://www.amazon.in/");

 await page.getByRole('textbox', { name: 'Search' }).click();

  await page.getByRole('textbox', { name: 'Search' }).fill('laptop');

  await page.getByRole('textbox', { name: 'Search' }).press('Enter');
 // await expect(page).toHaveURL('https://www.amazon.in/s?k=laptop&crid=10TUFMGNO5J09&sprefix=laptop%2Caps%2C636&ref=nb_sb_noss_1');

});