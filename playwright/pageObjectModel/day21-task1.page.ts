import {Locator, Page, expect} from '@playwright/test';

class flipkart{
    closePrompt: Locator;
    homeCategoryBtn: Locator;
    gudiPadwaStoreImg: Locator;
    productCategory5: Locator;
    product4: Locator;
    addToCartBtn: Locator;
    cart: Locator;
    productCategory8: Locator;
    increaseQuantity1: Locator;
    increaseQuantity2: Locator;

    constructor(page: Page){
        this.closePrompt = page.locator('//span[@class="b3wTlE"]');

        this.homeCategoryBtn = page.locator('//div[@class="css-g5y9jx"]/img').nth(5);

        this.gudiPadwaStoreImg = page.locator('//div[@class="_3n8fna1co _3n8fna10j _3n8fnaod _3n8fna1 _3n8fnac7 _1i2djtb9 _1i2djt0 _1i2djtl6 _1i2djtix _1i2djte9 _1i2djtgi"]/div[@class="css-g5y9jx"]/div[@class="grid-formation grid-column-2"]/div[@class="css-g5y9jx"]/div/div/a[@class="_3n8fna1co _3n8fna10j _3n8fnaod _3n8fna1 _3n8fnac7 _1i2djtb9 _1i2djtk9 _1i2djtir _1i2djtja _1i2djtjb"]').nth(1);

        this.productCategory5 = page.locator('//*[@id="product-4"]/div/div/div/a/div/picture/img').first();

        this.product4 = page.locator('//div[@class="lWX0_T gLr2nw"]/img').nth(3)

        this.addToCartBtn = page.locator('//div[text()="Add to cart"]');

        this.cart = page.locator('//span[text()="Cart"]');

        this.productCategory8 = page.locator('//*[@id="slot-list-container"]/div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/div/div[2]/div/div/div/a/div/picture/img');


        this.increaseQuantity1 = page.getByRole('button', { name: "+" }).first();
        this.increaseQuantity2 = page.getByRole('button', { name: "+" }).nth(1);
        
    }
    async goToGudipadwaStore(){
        await this.closePrompt.click();
        await this.homeCategoryBtn.click();
        await this.gudiPadwaStoreImg.click();
    }
    async goToProductPage(page:Page){
        await this.productCategory5.click();
        this.product4 = page.locator('//div[@class="lWX0_T gLr2nw"]/img').nth(3);
        let [page2] = await Promise.all([
            page.waitForEvent("popup"),
            this.product4.click(),
        ]);
        return page2; 
    }
    async addToCart(newPage:Page) {
        this.addToCartBtn = newPage.locator('//div[text()="Add to cart"]');   
        await this.addToCartBtn.click();
        await newPage.close();
    }

    async goToProductPage2(page:Page){
        await page.goBack();
        await this.productCategory8.click();
        this.product4 = page.locator('//div[@class="lWX0_T gLr2nw"]/img').nth(3);
        let [page3] = await Promise.all([
            page.waitForEvent("popup"),
            this.product4.click(),
        ]);
        return page3; 
    }

    async goToCart(page:Page){
        await this.cart.click();
        await this.increaseQuantity1.click();
        await this.increaseQuantity2.click();
    }
    

    

    

}

export default flipkart;
