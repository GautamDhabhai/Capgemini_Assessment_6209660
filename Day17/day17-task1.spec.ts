import {test} from '../playwright/node_modules/@playwright/test'

test("day 17 task 1", async({page})=>{
    await page.goto('https://www.automationtesting.co.uk/dropdown.html');
    let dropdown = await page.locator('//select[@id="cars"]');
    await dropdown.click();
    const expectedOptions = ['Audi', 'BMW', 'Ford', 'Honda', 'Jeep', 'Mercedes', 'Suzuki', 'Volkswagen'];
    let optionArr = await page.locator('//option').allInnerTexts();
    expectedOptions.sort();
    optionArr.sort();
    
    if(JSON.stringify(expectedOptions) === JSON.stringify(optionArr)){
        console.log("All dropdown options are as expected")
    }
    else{
        console.log("All dropdown options are not as expected")
    }
})