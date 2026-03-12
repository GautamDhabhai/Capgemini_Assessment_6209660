import {test, expect} from '../playwright/node_modules/@playwright/test'

test("day18 task 3", async({page}) =>{
    page.on("dialog", async(dialog) => {

        if(dialog.type()=='alert'){
            await page.waitForTimeout(2000);
            await dialog.accept();
        }
        else if(dialog.type()=="confirm"){
            await page.waitForTimeout(2000);
            await dialog.dismiss();
        }
        else if(dialog.type()=="prompt"){
            await page.waitForTimeout(2000);
            await dialog.accept("Gautam")
        }
        
    })
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    
    let alert = await page.locator('//button[text()="Click for JS Alert"]').click();
    let paragraph = await page.locator('#result')
    await expect(paragraph).toContainText("You successfully clicked an alert");

    
    let confirmation = await page.locator('//button[text()="Click for JS Confirm"]').click();

    await expect(paragraph).toContainText("You clicked: Cancel");

   
    let prompt1 = await page.locator('//button[text()="Click for JS Prompt"]').click();
    await expect(paragraph).toContainText("You entered: Gautam");
    await page.waitForTimeout(2000);
    await page.screenshot({path:'screenshots/day18 task3.png'});
});