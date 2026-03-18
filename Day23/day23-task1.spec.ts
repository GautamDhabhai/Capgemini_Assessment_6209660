import {test, expect} from '../playwright/node_modules/@playwright/test';
import Day23task1 from '../playwright/pageObjectModel/day23-task1.page';
import path from 'path';
import jsonData from '../playwright/testdata/day23-task1.json';

test('File Upload Test', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    const day23task1 = new Day23task1(page);
    await day23task1.uploadFile(path.join(__dirname, jsonData.filePath));
    await day23task1.clickUploadBtn();
    let fileName = await day23task1.getUploadedFileName();
    expect(fileName).toBe(jsonData.expectedFileName);
    
});