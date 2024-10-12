const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require('../Pages/page');
const LoginPage = require('../Pages/login.page');


Given(/^I open saucedemo website$/, async () => {
    await Page.open('/')
})
When(/^ login with valid credential$/, async () => {
    await LoginPage.login('standard_user', 'secret_sauce');
})
Then(/^I should be on inventory page$/, async () => {
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
})
When(/^I login with invalid username$/, async () => {
    await LoginPage.login('invalid_user', 'secret_sauce');
})
When(/^I login with invalid password$/, async () => {
    await LoginPage.login('standard_user', 'invalid_password');
})
Then(/^I should see an error message$/, async () => {
    await LoginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
})