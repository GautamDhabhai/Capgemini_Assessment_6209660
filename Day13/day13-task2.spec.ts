import {test} from '../playwright/node_modules/@playwright/test'

test("test", async ({ page }) => {
  await page.goto("https://www.icc-cricket.com/rankings");
  //getting rating of joe root instead
  let rating = await page.locator('//*[@id="mens-batting-rankings"]/div[2]/div/div[1]/div[1]/div/div/table/tbody/tr[1]/td[3]/div/span').textContent();
  console.log(`Rating of Joe Root is ${rating
    }`)
  await page.screenshot({ path: "./screenshots/day13-task2.png" });
});