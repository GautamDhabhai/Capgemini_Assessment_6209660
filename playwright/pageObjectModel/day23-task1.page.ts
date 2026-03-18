import {Locator, Page} from '@playwright/test';

class Day23task1{
    page:Page;
    input: Locator;
    uploadBtn: Locator;
    fileUploadedConfirm: Locator;
    constructor(page:Page){
        this.page = page;
        this.input = page.locator('//input[@id="file-upload"]');
        this.uploadBtn = page.locator('//input[@id="file-submit"]');
        this.fileUploadedConfirm = page.locator('//div[@id="uploaded-files"]');
    }

    async uploadFile(path: string){
        await this.input.setInputFiles(path);
    }

    async clickUploadBtn(){
        await this.uploadBtn.click();
        await this.page.waitForTimeout(4000);
        await this.page.screenshot({path:'screenshots/day23-task1.png'})
    }

    async getUploadedFileName(){
        return await this.fileUploadedConfirm.innerText();
    }

    
}

export default Day23task1;