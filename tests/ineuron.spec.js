import { test, expect } from '@playwright/test';

test("Login Test",async function({page})
{

 await page.goto("https://ineuron-courses.vercel.app/login");

 await page.waitForSelector(".submit-btn");
 //await page.getByText("Sign in").click();
 await page.locator(".submit-btn").click();
 await expect(page.locator(".errorMessage")).toContainText("Email and Password is required");



});

test.only("Invalid User Name and Password",async function({page})
{

 await page.goto("https://ineuron-courses.vercel.app/login");


 await page.getByPlaceholder("Email").type("test@gmail.com");
 await page.getByPlaceholder("Password").type("test1234");
 await page.locator(".submit-btn").click();

 await page.waitForSelector(".errorMessage");
 await expect(page.locator(".errorMessage")).toContainText("USER Email Doesn't Exist");



});