import {test, expect} from '../playwright/node_modules/@playwright/test'

test("lenskart", async({page}) => {
    await page.goto("https://www.lenskart.com");
    let storesLink = await page.locator('//a[@id="lrd9"]');
    await storesLink.hover();
    let bangalore = await page.locator('//div[@class="sc-2ea48804-8 fgcpQ"]/a[@class="sc-2ea48804-9 byBHlR getGaData"]').nth(1);
    await bangalore.click();
    await page.screenshot({path: 'screenshots/day16-task2.png'});

})