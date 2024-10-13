const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require('../Pages/page');
const LoginPage = require('../Pages/login.page');
const ProductPage = require('../Pages/product.page');

Given(/^I open kasirdemo website$/, async() => {
    await Page.open('/') 
})
When(/^I login with valid credential$/, async() => {
    await LoginPage.login('testt@email.com', 'testing123');
})
When(/^I select product tab$/, async() => {
    await ProductPage.product()
})
When(/^I click add button$/, async() => {
    await ProductPage.add()
})
When(/^I click save button$/, async() => {
    await ProductPage.save();
})
Then(/^I see an alert message$/, async() => {
    await ProductPage.assertAlertMessage('"name" is not allowed to be empty')
})

When(/^I fill field$/, async () => {
    await ProductPage.isiData('ini nama', 'ini deskripsi', '500', '1000','5');
    await ProductPage.kategori();
    await ProductPage.save();
})
Then(/^I should see pop up success message$/, async() => {
    await ProductPage.assertSuccessMessage('item ditambahkan');
})