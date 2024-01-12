Feature: Login Feature

@Login
Scenario: Login to Hotel App
    When User is on login page 
    And User enter username
    And User enter password
    And User Click on login button
    Then User verify title

