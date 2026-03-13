import {test, expect} from '@playwright/test'
import path from 'node:path'

test("day19 task 2", async({page})=>{
    await page.goto('https://demoqa.com/upload-download');

    let [downloadedFile] = await Promise.all([page.waitForEvent('download'), page.locator('#downloadButton').click()]);

    await downloadedFile.saveAs(path.join(__dirname, "../testdata/downloadedFile.txt"));
    await page.locator('#uploadFile').setInputFiles(path.join(__dirname, "../testdata/downloadedFile.txt"));
    let filepath = await page.locator('#uploadedFilePath').textContent();
    await expect(filepath).toContain('downloadedFile.txt');
    await page.screenshot({path: `screenshots/day19-task2.png`});
})