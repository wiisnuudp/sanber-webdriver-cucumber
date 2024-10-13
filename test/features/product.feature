Feature: kasirdemo sales test

    @test @negative
    Scenario: add product with no fill field
        Given I open kasirdemo website
        When I login with valid credential
        And I select product tab
        And I click add button
        And I click save button
        Then I see an alert message
    
    @test @positive
    Scenario: add product with fill field
        Given I select product tab
        When I click add button
        And I fill field
        And I click save button
        Then I should see pop up success message