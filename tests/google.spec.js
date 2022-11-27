const { test, expect } = require('@playwright/test');

test("Google Launch", async function ({page})
{

   await page.goto("https://www.bigbasket.com/");
   await page.locator("input[qa='searchBar']").fill("Posto");

   const title= await page.title();

   expect(title).toContain("Grocery");

  // await page.locator("button[qa='searchBtn']").click();

  await page.locator("button[qa='searchBtn']").press("Enter");

  //await page.pause();

   await expect(page).toHaveTitle(/.*Online/);

   await page.getByText("About Us").first().click();
    
});