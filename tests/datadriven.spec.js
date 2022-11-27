import { test, expect } from '@playwright/test';
const multidata = JSON.parse(JSON.stringify(require("../testdata/userdata.json")));

for (const data of multidata)
 {
    test(`Login Invalid ${data.id}`, async  ({ page }) =>
    {

        await page.goto("https://ineuron-courses.vercel.app/login");


        await page.getByPlaceholder("Email").type(data.email);
        await page.getByPlaceholder("Password").type(data.Password);
        await page.locator(".submit-btn").click();

        await page.waitForSelector(".errorMessage");
        await expect(page.locator(".errorMessage")).toContainText("USER Email Doesn't Exist");



    });
}