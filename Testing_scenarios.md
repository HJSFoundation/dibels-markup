Given Then When And But

Given I am a teacher

Feature: Log In

  Scenario: Valid Credentials
    When I enter the correct credentials to the log in screen
    And I hit the Log In button
    And the server does not respond with errors
    Then I should see the loading screen



  When I enter the incorrect credentials to the log in screen
  And I hit the Log In button
  And the server does not respond with errors

