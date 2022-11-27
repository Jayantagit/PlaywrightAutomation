import { test, expect } from '@playwright/test';

test('Auto suggestion', async ({ page }) => {

    await page.goto("https://www.google.com/");

    await page.locator("//input[@name='q']").type("Mukesh Otwani",{delay:300});

    const elements = await page.locator("//div[@role='option']");

    const count = await elements.count();
    console.log(count);

    const value = await elements.allTextContents();

    value.forEach(function (val, i, arr) {
        if (val.includes("api")) {
            elements.nth(i).click();
        }
    });


  expect(page).toHaveTitle("mukesh otwani api testing - Google Search");

});