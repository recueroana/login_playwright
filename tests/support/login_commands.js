const { expect } = require('@playwright/test');
const dados = require('../fixture/dados.json')

exports.loginPage = class loginPage {
    /**
    * @param {import('@playwright/test').Page} page
    */

constructor(page) {
    this.page = page;
}

    async login(){
        await this.page.fill('[id= user-name]', dados.user);
        await this.page.fill('[id= password]', dados.password);
        await this.page.getByRole('button', { name: 'LOGIN' }).click();
    }
}