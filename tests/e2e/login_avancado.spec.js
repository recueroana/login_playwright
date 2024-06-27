const { test, expect } = require('playwright/test');
const { LOGIN_URL} = require('./config')
const dados = require('../fixture/dados.json');
const { loginPage } = require('../support/login_commands');


test.describe('Login', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(LOGIN_URL);
    });

    test('Login', async({ page }) => {
        const homePageLogin = new loginPage(page);
        await homePageLogin.login();
    });
});