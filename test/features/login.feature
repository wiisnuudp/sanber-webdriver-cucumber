Feature: Saucedemo login test

    @test @negative
    Scenario: Verify login failed with invalid credential
        Given I open kasirdemo website
        When I login with invalid credential
        Then I should see an error message credential
    
    @test @positive
    Scenario: Login successfull with valid credential
        Given I open kasirdemo website
        When I login with valid credential
        Then I should be on dashboard page


    