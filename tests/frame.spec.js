const { test, expect } = require('@playwright/test');



test.only('Frame Handling', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/iframe");

    const myFrame = await page.frameLocator("//iframe[@id='mce_0_ifr']");

   await myFrame.locator("//p[text()='Your content goes here.']").click();
   await myFrame.locator("//p[text()='Your content goes here.']").fill("Playwright");

   await page.pause();

});