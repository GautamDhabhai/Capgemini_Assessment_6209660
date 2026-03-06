import {test} from '@playwright/test'

test("gold medals", async({page}) => {
    await page.goto("https://www.google.com");
    let srch = await page.locator('//textarea[@id="APjFqb"]');
    await srch.fill("tokyo olympics");
    await srch.press('Enter');
    await page.goto('https://www.olympics.com/en/olympic-games/tokyo-2020');
    await page.locator('//button[.="Yes, I am happy"]').click();
    //await page.mouse.wheel(0, 4500);
    let allAth = await page.locator('//a[@data-cy="link" and @class="primary" and .="All Athletes"]');
    await allAth.click();
    // let goldMedal = await page.locator('//li[@data-row-id="all-athletes-table-row-2"]/descendant::div[@data-row-id="medals-row-2"]/div/span/span[@data-cy="ocs-text-module" and .="4"]').textContent();
    let gold = await page.locator('//li[@data-row-id="all-athletes-table-row-2"]/descendant::div[@data-row-id="medals-row-2"]/div/span/span[@data-cy="ocs-text-module"]').first().textContent();
    console.log(`Gold Medals of Emma are ${gold}`);

    
    
    
    await page.screenshot({path: "./screenshots/day13-task1.png"})
})