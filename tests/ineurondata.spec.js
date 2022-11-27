import { test, expect } from '@playwright/test';
const data=JSON.parse(JSON.stringify(require("../testdata/user.json")));

test.only("Invalid User Name and Password",async function({page})
{

 await page.goto("https://ineuron-courses.vercel.app/login");


 await page.getByPlaceholder("Email").type(data.email);
 await page.getByPlaceholder("Password").type(data.Password);
 await page.locator(".submit-btn").click();

 await page.waitForSelector(".errorMessage");
 await expect(page.locator(".errorMessage")).toContainText("USER Email Doesn't Exist");



});