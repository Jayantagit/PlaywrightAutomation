import { test, expect } from '@playwright/test';
const data = JSON.parse(JSON.stringify(require("../testdata/userRole.json")));

const Home = require("../pages/Home");
const Login = require("../pages/Login");

test.only("Login iNeuron", async function ({ page }) {

    const home = new Home(page)
    const login = new Login(page)

    await home.launchApp();
    await home.clickOnLoginButton();
    await login.doLogin(data.email,data.Password);

    

});