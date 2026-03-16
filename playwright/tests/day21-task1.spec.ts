import {test, expect} from '@playwright/test';
import Flipkart from '../pageObjectModel/day21-task1.page';

test('day21 task1', async ({page}) => {
    const flipkart = new Flipkart(page);
    await page.goto("https://www.flipkart.com")
    await flipkart.goToGudipadwaStore();
    const page2 = await flipkart.goToProductPage(page);
    await flipkart.addToCart(page2);
    const page3 = await flipkart.goToProductPage2(page);
    await flipkart.addToCart(page3);
    await flipkart.goToCart(page);
    await page.waitForTimeout(3000);
    await page.screenshot({path: './screenshots/day21-task1.png'});


})

//
//getByRole('button', { name: '+' }).nth(1)
