import {Locator, Page, expect} from '../../playwright/node_modules/@playwright/test';
import data from '../../playwright/testdata/day27-task1.json'

class transaction{
    openAccBtn: Locator;
    customerNameDD: Locator;
    customerLoginBtn: Locator;
    loginBtn: Locator;
    depositBtn: Locator;
    depositBtn2: Locator;
    depositTF: Locator;
    withdrawBtn: Locator;
    withdrawBtn2: Locator;
    withdrawTF: Locator
    successMsg: Locator;
    balance: Locator;
    logoutBtn: Locator;
    page: Page;
    constructor(page: Page){
        this.page = page;
        this.customerLoginBtn = page.getByRole('button', {name: 'Customer Login'});
        this.customerNameDD = page.locator('#userSelect');
        this.loginBtn = page.getByRole('button', {name: 'Login'});
        this.depositBtn = page.getByRole('button', {name: 'Deposit'}).first();
        this.depositBtn2 = page.getByRole('button', {name: 'Deposit'}).last();
        this.withdrawBtn = page.getByRole('button', {name: 'Withdraw'});
        this.withdrawBtn2 = page.getByRole('button', {name: 'Withdraw'}).last();
        this.depositTF = page.getByPlaceholder('amount');
        this.withdrawTF = page.getByPlaceholder('amount');
        this.successMsg = page.locator('//span[@ng-show="message"]');
        this.openAccBtn = page.getByRole('button', {name: 'Open Account'});
        this.balance = page.locator('//strong[@class="ng-binding"]').nth(1);
        this.logoutBtn = page.getByRole('button', {name: 'Logout'});

    }

    async depoAndWithdraw(){
        await this.customerNameDD.selectOption({value: '6'});
        await this.loginBtn.click();
        await this.depositBtn.click();
        await this.depositTF.fill(data.depositAmt.toString())
        await this.depositBtn2.click();
        await expect(this.successMsg).toHaveText('Deposit Successful');
        await this.withdrawBtn.click();
        await this.withdrawTF.fill(data.withdrawAmt.toString());
        await this.withdrawBtn2.click();
        await expect(this.successMsg).toHaveText('Transaction successful');
        let bal = Number((await this.balance.textContent()));
        await expect(bal).toBe((data.depositAmt - data.withdrawAmt));
        await this.page.screenshot({path: 'screenshots/day27-task1.png'})
        await this.logoutBtn.click();

    }

}

export default transaction;
