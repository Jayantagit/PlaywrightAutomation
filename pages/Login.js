class Login {

    constructor(page) {
        this.page = page;
        this.username = page.locator("//input[@id='email1']");
        this.password = page.locator("//input[@id='password1']");
        this.submit = page.getByText("Sign in");
    }

    async doLogin(uname, pass) {
        await this.username.type(uname)
        await this.password.type(pass)
        await this.submit.nth(0).click();
    }
}
module.exports = Login