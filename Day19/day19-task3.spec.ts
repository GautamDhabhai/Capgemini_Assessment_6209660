import {test, expect} from '../playwright/node_modules/@playwright/test'

test("day19 task 3", async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.locator('#file-upload').setInputFiles('C:/Users/Gautam Dhabhai/Desktop/t7a/Capgemini_Assessment_6209660/playwright/testdata/images/itoshi-sae.jpg');
    await page.locator('#file-submit').click();
    await expect(page.locator('#uploaded-files')).toContainText('itoshi-sae.jpg');
    await page.screenshot({path: `screenshots/day19-task3.png`});
    
})