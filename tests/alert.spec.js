import { test, expect } from '@playwright/test';

test('JS Alert', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await page.getByText("Click for JS Alert").click()

    await page.on("dialog",function(jsdialog)
    {

        jsdialog.accept();
    });

});

test.only('JS Confirm', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

   

    await page.on("dialog",function(jsdialog)
    {
         expect(jsdialog.message()).toContain("I am a JS Confirm");

        jsdialog.accept();
    });

    await page.getByText("Click for JS Confirm").click();
    const msg=await page.locator("#result").textContent();
    console.log(msg)
    expect(msg.includes("You clicked: Ok")).toBeTruthy();
    page.pause();

});