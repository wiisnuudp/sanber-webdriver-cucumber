class LoginPage{
    get usernameInput() {
        return $('#email'); // locator field username
    }

    get passwordInput() {
        return $('#password'); // locator field password
    }

    get loginButton() {
        return $('//button[@type="submit"]'); // locator login button
    }
    
    get errorMsg() {
        return $("//div[@role='alert']"); // locator error message
    }

    //Disini didefinisikan action yang akan dilakukan kepada element
  
  async login(username, password) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
    await browser.setTimeout({ 'implicit': 5000 })
    
  }

  async assertErrorMessage(expectedErrorMessage) {
    
    await expect(this.errorMsg).toHaveText(expectedErrorMessage);
  }

  async getErrorMessage() {
    return this.errorMsg.getText();
  }
}
module.exports = new LoginPage();