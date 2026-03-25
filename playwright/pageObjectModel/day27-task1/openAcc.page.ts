import {Locator, Page, expect} from '@playwright/test';
import data from '../../testdata/day27-task1.json'

class openAccount{
    fnameTF: Locator;
    lnameTF: Locator;
    postcodeTF: Locator;
    addCustomerBtn: Locator;
    addCustomerBtn2: Locator;
    openAccBtn: Locator;
    customerNameDD: Locator;
    currencyDD: Locator;
    procesBtn: Locator;
    homeBtn: Locator;
    page: Page;
    constructor(page: Page){
        this.page = page;
        this.homeBtn = page.getByRole('button', {name: 'Home'});
        this.addCustomerBtn = page.getByRole('button', {name: /Add Customer/}).first();
        this.fnameTF = page.getByRole('textbox', {name: 'First Name'});
        this.lnameTF = page.getByRole('textbox', {name: 'Last Name'});
        this.postcodeTF = page.getByRole('textbox', {name: 'Post Code'});
        this.addCustomerBtn2 = page.getByRole('button', {name: 'Add Customer'}).last();
        this.customerNameDD = page.locator('#userSelect');
        this.currencyDD = page.locator('#currency');
        this.procesBtn = page.getByRole('button', {name: 'Process'});
        this.openAccBtn = page.getByRole('button', {name: 'Open Account'});

    }
    
    async addCustomer(){
        await this.addCustomerBtn.click();
        await this.fnameTF.fill(data.fname);
        await this.lnameTF.fill(data.lname);
        await this.postcodeTF.fill(data.postcode);
        await this.addCustomerBtn2.click();
    }

    async openAccount(){
        await this.openAccBtn.click();
        await this.customerNameDD.selectOption({value: '6'});
        await this.currencyDD.selectOption({value: data.currency});
        await this.procesBtn.click();
        await this.homeBtn.click();
    }


}

export default openAccount;
