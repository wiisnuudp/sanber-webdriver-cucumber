const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require('../Pages/page');
const LoginPage = require('../Pages/login.page');


Given(/^I open kasirdemo website$/, async () => {
        await Page.open('/') 
})
When(/^I login with invalid credential$/, async () => {
    await LoginPage.login('testt@email.com', 'test23');
})
Then(/^I should see an error message credential$/, async () => {
    await LoginPage.assertErrorMessage('Kredensial yang Anda berikan salah');
})

When(/^I login with valid credential$/, async () => {
    await LoginPage.login('testt@email.com', 'testing123');
})
Then(/^I should be on dashboard page$/, async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/dashboard');
})
