import {test} from '@playwright/test';
import AmazonJobs from '../pageObjectModel/day22-task1.page';

test('day22 task1', async ({page}) => {
    const amazonJobs = new AmazonJobs(page);
    await page.goto("https://www.amazon.in");
    await amazonJobs.goToCareersPage();
    await amazonJobs.filterJobs();
    let page2 = await amazonJobs.chooseJob(page);
    await amazonJobs.apply(page2);
    await page.waitForTimeout(3000);
    await page.screenshot({path: './screenshots/day22-task1.png'});
})
