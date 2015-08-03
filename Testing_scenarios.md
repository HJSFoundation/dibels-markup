******** Given I am a teacher ***********


Log In Screen
==============

Feature: Log In

  Scenario: Valid Credentials
    When I enter the correct credentials to the log in screen
    And I hit the Log In button
    And the server does not respond with errors
    Then I should see the loading screen



  When I enter the incorrect credentials to the log in screen
  And I hit the Log In button
  And the server does not respond with errors

Feature: Forgot Password

  Scenario: Forgot Password
    When I am on the Log In Screen
    And I click on the Forgot Password Link
    Then I should be redirected to https://www.tutormate.org/users/password/new


Feature: Done with Forgot Password
  Scenario: Leaving Central Station Forgot Password Link
    When I have navigated to Central Station
    And clicked on the Done button
    Then I should see the Log In Screen







 Conference Management Screen
 ============================

Feature: Manage Students from Conference Management Screen
  Scenario: I want to manage students while on the Conference Management screen
    Given I am logged into Central Station
    When I click on Manage Students on the Main Menu
    Or I click on the Manage Students button in the table header
    Then I be redirected to https://www.tutormate.org/students/manage

Feature: Manage Students from Conference Management Screen
  Scenario: I want to manage students while on the Conference Management screen
    Given I am not logged into Central Station
    When I click on Manage Students on the Main Menu
    Or I click on the Manage Students button in the table header
    Then I be redirected to https://www.tutormate.org/users/sign_in


Feature: Desired Sessions per Week for a Conference
  Scenario: I want to select Desired Sessions per Week for a conference
    Given that I am on the Conference Management Screen
    When I click on the Desired Sessions per Week for a Conference (keep track of the conference name because the position may change)
    And I select a different number than the current selection
    When I find the name of the conference that I changed
    Then the Desired Sessions Per Week should match the number I changed it to

Feature: Display Conference Group Student info
  Scenario: I want to know the names and reading stages of the students in a conference group
    Given that I am on the Conference Management Screen
    When I click on a Group icon
    Then I should see the first name, last initial and reading stage of the students in the group

Feature: Display Conference Group Student info
  Scenario: I no longer want to see the names and reading stages of the students in a conference group
    Given that I am on the Conference Management Screen and I have clicked on a group icon
    Then the student info row is displayed
    When I click on the Group icon again
    Then I should not see any information about the students in the group

Feature: Start a Group Sessions
  Scenario: I want to start a session with a group of students
    Given that I click on Start Session for a Group (first click on a Group icon, note the student name or names)
    Then I should see the student name or names displayed sorted in alpha order, in the tabs of the teacher workspace

Feature: Start an Individual Session
  Scenario: I want to start a session with a single student
  Given that I click on Start Session for a Student (note the student name)
  Then I should see the student name displayed on the left most tab of the teacher workspace

