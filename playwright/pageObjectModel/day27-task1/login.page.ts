import {Locator, Page, expect} from '@playwright/test';
import data from '../../testdata/day27-task1.json'

class login{
    bankLoginBtn: Locator;
    customerLoginBtn: Locator;
    
    page: Page;
    constructor(page: Page){
        this.page = page;
        this.customerLoginBtn = page.getByRole('button', {name: 'Customer Login'});
        this.bankLoginBtn = page.getByRole('button', {name: 'Bank Manager Login'});

    }

    async loginAsManager(){
       await  this.page.goto(data.url);
       await this.bankLoginBtn.click();

    }
    async loginAsCustomer(){
        await this.customerLoginBtn.click();
    }

}

export default login;
