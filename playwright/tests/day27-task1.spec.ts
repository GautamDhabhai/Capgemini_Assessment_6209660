import {test, expect} from '@playwright/test';
import openAccount from '../pageObjectModel/day27-task1/openAcc.page';
import transaction from '../pageObjectModel/day27-task1/depoAndWithdrawl.page';
import Login from '../pageObjectModel/day27-task1/login.page'; 

// test.use({
//     launchOptions:{
//         slowMo: 500
//     }
// });

test("bank", async({page}) => {
    let login = new Login(page);
    await login.loginAsManager();
    let bank = new openAccount(page);
    await bank.addCustomer(); 
    await bank.openAccount(); 
    await login.loginAsCustomer();
    let customer = new transaction(page);
    await customer.depoAndWithdraw();
})