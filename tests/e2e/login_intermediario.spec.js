const { test, expect } = require('playwright/test');
const { LOGIN_URL} = require('./config')
const dados = require('../fixture/dados.json')


test.describe('Login', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(LOGIN_URL);
    });

    test('Login', async({ page }) => {
        await page.fill('[id= user-name]', dados.user);
        await page.fill('[id= password]', dados.password);
        await page.getByRole('button', { name: 'LOGIN' }).click();
    });
});