const { When, Then } = require("@cucumber/cucumber")

const {LoginPage}= require('../page/LoginPage');

let lp = new LoginPage


When ('User is on login page', async()=>{
    await lp.navigate();
})

When ('User enter username', async()=>{
    await lp.enterUsername();
})

When ('User enter password', async()=>{
    await lp.enterPassword();
})

When ('User Click on login button', async()=>{
    await lp.clickLoginButton();
})

Then ('User verify title', async()=>{
    await lp.verifyTitle();
})





     