import {test, expect} from '@playwright/test'

test("task1 day 15", async({page}) => {
    await page.setDefaultTimeout(20000);
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
    const name = await page.getByLabel('Name');
    const mail = await page.getByLabel('email');
    const pwd = await page.getByLabel('password');
    const btn = await page.getByRole('button', {name: 'Register'});
    await expect(name).toBeEditable();
    await expect(mail).toBeAttached();
    await expect(pwd).toBeVisible();
    await name.fill("Gautam");
    await mail.fill("dummy@mail.com");
    await pwd.fill("password");
    await expect(name).toHaveClass('bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 focus:bg-[rgb(240,240,240)] disabled:opacity-50 disabled:cursor-not-allowed')
    await expect(mail).toHaveValue('dummy@mail.com')
    await btn.click();
    await page.waitForTimeout(2000);
    await page.screenshot({path:'screenshots/day15-task1.png'});
    
})