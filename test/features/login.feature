Feature: Saucedemo login test

    
    Scenario: Login successfull with valid credential
        Given I open saucedemo website
        When I login with valid credential
        Then I should be on inventory page


    Scenario: Verify login failed with invalid username
        Given I open saucedemo website
        When I login with invalid username
        Then I should see an error message

    Scenario: Verify login failed with invalid password
        Given I open saucedemo website
        When I login with invalid password
        Then I should see an error message