
import { chromium, expect,test } from "@playwright/test";

test('Facebook_Create_Account test',async()=>{
     let browser= await chromium.launch({headless:false});
     let page=await browser.newPage();
    await page.goto("http://facebook.com/");             
    await page.getByText("Create new account").click();
    await page.waitForTimeout(1000);             
    await page.getByLabel("First name").fill("KANCHAN");
    await page.waitForTimeout(100);
    await page.getByLabel("Surname").nth(1).fill("WAGHODE");
    await page.waitForTimeout(1000);
    await page.getByRole('none').nth(1).click();
    await page.waitForTimeout(1000);
    await page.getByLabel("Select day").click();
    await page.getByRole('option', {name :'2'}).nth(0).click();
    await page.waitForTimeout(1000);
    await page.getByLabel("Select month").click();
    await page.waitForTimeout(1000);      
    await page.getByRole('option', {name :'April'}).click();
    await page.waitForTimeout(1000);
    await page.getByLabel("Select year").click();
    await page.waitForTimeout(1000);
    await page.getByRole('option', {name :'1999'}).click();
    await page.waitForTimeout(1000);
    await page.getByRole('none').nth(2).click();
    await page.waitForTimeout(1000);
    await page.locator("#_R_mad6p4jikacppb6amH2_").click();
    await page.waitForTimeout(1000);
    await page.getByRole('option',{name:'Female'}).click();
    await page.waitForTimeout(1000);
    await page.locator("#_R_6ad8p4jikacppb6amH1_").fill("1234567890");
    await page.waitForTimeout(1000);      
    await page.locator("#_R_clap4jikacppb6amH1_").fill("KANCHAN.WAGHODE");
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Show password' }).click();
    await page.waitForTimeout(1000);
    //await page.locator("//span[text()='Submit']").nth(1).click();
    //await page.waitForTimeout(1000);
    //await page.locator("//span[text()='I already have an account']").click();
    //await page.waitForTimeout(1000);
              
    await page.getByRole('none').nth(0).click();
    await page.waitForTimeout(1000);



    });