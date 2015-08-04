******** Given I am a teacher ***********

```cucumber
Log In Screen
==============

##Feature: Log In

###Scenario: Valid Credentials
    When I enter the correct credentials to the log in screen
    And I hit the Log In button
    And the server does not respond with errors
    Then I should see the loading screen

###Scenario: Invalid Credentials
    When I enter the incorrect credentials to the log in screen
    And I hit the Log In button
    Then I should see a message indicating that the username or password is incorrect

##Feature: Forgot Password

###Scenario: Forgot Password
    When I am on the Log In Screen
    And I click on the Forgot Password Link
    Then I should be redirected to https://www.tutormate.org/users/password/new


##Feature: Done with Forgot Password
###Scenario: Leaving Central Station Forgot Password Link
    When I have navigated to Central Station
    And clicked on the Done button
    Then I should see the Log In Screen

#Conference Management Screen
 ============================

##Feature: Manage Students from Conference Management Screen
###Scenario: I want to manage students while on the Conference Management screen
    Given I am logged into Central Station
    When I click on Manage Students on the Main Menu
    Or I click on the Manage Students button in the table header
    Then I be redirected to https://www.tutormate.org/students/manage

##Feature: Manage Students from Conference Management Screen
###Scenario: I want to manage students while on the Conference Management screen
    Given I am not logged into Central Station
    When I click on Manage Students on the Main Menu
    Or I click on the Manage Students button in the table header
    Then I be redirected to https://www.tutormate.org/users/sign_in


##Feature: Desired Sessions per Week for a Conference
###Scenario: I want to select Desired Sessions per Week for a conference
    Given that I am on the Conference Management Screen
    When I click on the Desired Sessions per Week for a Conference (keep track of the conference name because the position may change)
    And I select a different number than the current selection
    When I find the name of the conference that I changed
    Then the Desired Sessions Per Week should match the number I changed it to

##Feature: Display Conference Group Student info
###Scenario: I want to know the names and reading stages of the students in a conference group
    Given that I am on the Conference Management Screen
    When I click on a Group icon
    Then I should see the first name, last initial and reading stage of the students in the group

##Feature: Display Conference Group Student info
###Scenario: I no longer want to see the names and reading stages of the students in a conference group
    Given that I am on the Conference Management Screen and I have clicked on a group icon
    Then the student info row is displayed
    When I click on the Group icon again
    Then I should not see any information about the students in the group

##Feature: Start a Group Sessions
###Scenario: I want to start a session with a group of students
    Given that I click on Start Session for a Group (first click on a Group icon, note the student name or names)
    Then I should see the student name or names displayed sorted in alpha order, in the tabs of the teacher workspace

##Feature: Start an Individual Session
###Scenario: I want to start a session with a single student
  Given that I click on Start Session for a Student (note the student name)
  Then I should see the student name displayed on the left most tab of the teacher workspace

#Teacher Workspace Screen
 ============================
 
Given that I have started a session

##Feature: End Session Button
###Scenario: I want to end a session
 Given that I click on the End Session button
 Then I should eventually see the Conference Management screen

##Feature: Flip Button
###Scenario: I want to flip the content on the Stage
Given that I select a stimulus
When I click on the Flip Button
Then I should see the content on the Stage flipped

###Scenario: I want to unflip the content on the Stage
Given that there is content flipped on Stage
When I click on the Flip Button
Then I should see the content on the Stage unflipped

##Feature: Timer
###Scenario: I want to display the timer
Given that the timer is not displayed
When I click on the timer button
Then I should see the timer

###Scenario: I want to hide the timer
Given that the timer is displayed
When I click the timer button
Then I should not see the timer

###Scenario: Set the timer minutes
Given that the timer is displayed
When I click on the Minutes number
Then I should see a drop down menu
And when I select 01
Then the minutes displayed should be 01

###Scenario: Set the timer seconds
Given that the timer is displayed
When I click on the Seconds number
Then I should see a drop down menu
And when I select 01
Then the seconds displayed should be 01

###Scenario: Start the timer
Given that the timer is displayed
And Minutes equals 01
And Seconds equals 01
When I click on the Start button
And I wait 2 seconds
Then I should see Minutes not equal to 01
And I should see Seconds not equal to 01

##Feature: Hamburger Button
###Scenario: I want to display the navigation menu
Given that the navigation menu is not displayed
When I click on the Hamburger Button
Then I should see the Navigation menu 
And it contains the menu items Manage Students and Log Out

###Scenario: I want to hide the navigation menu
Given that the navigation menu is displayed
When I click on the Hamburger Button
Then I should not see the Navigation menu 
And I should not see the menu items Manage Students and Log Out

##Feature: Assessment Buttons
Duplicate mastery spec for all other assessment buttons

##Feature: Matrix Button
###Scenario: I want to hide the matrix
Given that the matrix is not hidden
When I click the Hide Matrix Button
Then I should not see the matrix
And I should see the Unhide Matrix Button

###Scenario: I want to show the matrix
Given that the matrix is hidden
When I click the Unhide Matrix Button
Then I should see the matrix
And I should see the Hide Matrix Button

##Feature: Student Tabs
###Scenario: I want to select a student
Given there are two students in the session
And that the left most tab is selected
When I click on a different student
I should see the left most tab unhighlighted
And I should see the tab I clicked on highlighted

##Feature: Stage
###Scenario: I want to view stimulus on stage
Given that the matrix is unhidden
And the selected skill is not Leveled Texts or Stage Stories
When I click on a stimulus tile
I should see the change to represent the stimulus

#Skill Tabs
 ============================
Given I have started a session with one student

##Feature: Skill Tabs Selection
###Scenario: I want to select a skill
Given that the left most tab is selected
When I click on a different tab
I should see the left most tab unhighlighted
And I should see the tab I clicked on highlighted

##Feature: Skill Tabs for Reading Stage 1
###Scenario: I want to verify the appropriate skills are available for Reading Stage 1
Given that a student set to Reading Stage 1 is selected
Then I should see the Skill Tabs "Letter Names" & "Leveled Texts"

##Feature: Skill Tabs for Reading Stage 2
###Scenario: I want to verify the appropriate skills are available for Reading Stage 2
Given that a student set to Reading Stage 2 is selected
Then I should see the Skill Tabs "Onsets & Rimes" & "Leveled Texts"

##Feature: Skill Tabs for Reading Stage 3
###Scenario: I want to verify the appropriate skills are available for Reading Stage 3
Given that a student set to Reading Stage 3 is selected
Then I should see the Skill Tabs "Onsets & Rimes" & "Leveled Texts"

##Feature: Skill Tabs for Reading Stage 4
###Scenario: I want to verify the appropriate skills are available for Reading Stage 4
Given that a student set to Reading Stage 4 is selected
Then I should see the Skill Tabs "Sight Words", "Onsets & Rimes", "Stage Stories " & "Leveled Texts"

##Feature: Skill Tabs for Reading Stage 5
###Scenario: I want to verify the appropriate skills are available for Reading Stage 5
Given that a student set to Reading Stage 5 is selected
Then I should see the Skill Tabs "Sight Words", "Onsets & Rimes", "Stage Stories " & "Leveled Texts"

##Feature: Skill Tabs for Reading Stage 6
###Scenario: I want to verify the appropriate skills are available for Reading Stage 6
Given that a student set to Reading Stage 6 is selected
Then I should see the Skill Tabs "Sight Words", "Onsets & Rimes", "Stage Stories " & "Leveled Texts"

##Feature: Skill Tabs for Reading Stage 7
###Scenario: I want to verify the appropriate skills are available for Reading Stage 7
Given that a student set to Reading Stage 7 is selected
Then I should see the Skill Tabs "Sight Words", "Onsets & Rimes", "Stage Stories " & "Leveled Texts"

##Feature: Skill Tabs for Reading Stage 8
###Scenario: I want to verify the appropriate skills are available for Reading Stage 8
Given that a student set to Reading Stage 8 is selected
Then I should see the Skill Tabs "Sight Words", "Onsets & Rimes" & "Leveled Texts"

##Feature: Skill Tabs for Reading Stage 9
###Scenario: I want to verify the appropriate skills are available for Reading Stage 9
Given that a student set to Reading Stage 9 is selected
Then I should see the Skill Tabs "Sight Words" & "Leveled Texts"

#Activity Menu
 ============================
 
##Feature: Activity Menu for Letter Names
###Scenario: I want to verify the appropriate activity is available for Skill Letter Names
Given a student set to Reading Stage 1 is selected
And the Skill Tab Letter Names is selected
I should see the Activity Menu Letters Icon selected

##Feature: Activity Menu for Letter Names
###Scenario: I want to verify the appropriate activity is available for Skill Leveled Texts
Given the Skill Tab Leveled Texts is selected
I should see no Activity Menu icons

##Feature: Activity Menu for Onsets & Rimes
###Scenario: I want to verify the appropriate activity is available for Skill Letter Names for a Reading Stage 2 student
Given a student set to Reading Stage 2 is selected
And the Skill Tab Onsets & Rimes is selected
I should see the Activity Menu Letters, Words and Tiles icons

##Feature: Activity Menu for Onsets & Rimes
###Scenario: I want to verify the appropriate activity is available for Skill Letter Names for a Reading Stage 3 through 8 student
Given a student set to Reading Stage 3 through 8 is selected
And the Skill Tab Onsets & Rimes is selected
I should see the Activity Menu Letters, Words and Tiles icons

##Feature: Activity Menu for Sight Words
###Scenario: I want to verify the appropriate activity is available for Skill Sight Words for a Reading Stage 4 through 8 student
Given a student set to Reading Stage 4 through 8  is selected
And the Skill Tab Sight Words is selected
I should see the Activity Menu Words, Phrases and Tiles icons

##Feature: Activity Menu for Stage Stories
###Scenario: I want to verify the appropriate activity is available for Skill Stage Stories for a Reading Stage 4 through 7 student
Given a student set to Reading Stage 4 through 7  is selected
And the Skill Tab Stage Stories is selected
I should see no Activity Menu icons

#Stimuli Tiles
 ============================
##Feature: Stimuli Tiles
###Scenario: I want to confirm there are appropriate stimuli for each Reading Stage and Skill
Given any Reading Stage
When I click on each of the skills
Then some stimuli tiles should be visible

#Stage Content
 ============================
##Feature: Letter Names Stage Content
###Scenario: I want to confirm there are appropriate stage content for Reading Stage 1 Letter Names
Given a student set to Reading Stage 1
And the Letter Names Skill Tab is selected
When I click on a stimulus tile
And wait 1 second
I should see a letter and an image on the stage

##Feature: Sight Words Stage Content
###Scenario: I want to confirm there are appropriate stage content for Reading Stage 3 through 9 Sight Words
Given a student set to Reading Stage 3 through 9
And the Sight Words Skill Tab is selected
When I click on a stimulus tile word
And wait 1 second
I should see the same word appear on the stage

#Onset & Rimes Stage Content
 ============================
##Feature: Reading Stage 2 Onset & Rimes Letters Activity Stage Content
###Scenario: I want to confirm there are appropriate stage content for Reading Stage 2 Onset & Rimes
Given a student set to Reading Stage 2
And the Onset & Rimes Skill Tab is selected
And the Letters Activity Icon is selected
When I click on a stimulus tile
And wait 1 second
I should see a letter and an image on the stage

##Feature: Reading Stage 3-8 Onset & Rimes Words Activity Stage Content
###Scenario: I want to confirm there are appropriate stage content for Reading Stage 3-8 Onset & Rimes Words Activity
Given a student set to Reading Stage 3-8
And the Onset & Rimes Skill Tab is selected
And the Words Activity Icon is selected
When I click on a stimulus tile
And wait 1 second
I should see a word containing the selected onset or rime

##Feature: Reading Stage 3-8 Onset & Rimes Phrases Activity Stage Content
###Scenario: I want to confirm there are appropriate stage content for Reading Stage 3-8 Onset & Rimes Phrases Activity
Given a student set to Reading Stage 3-8
And the Onset & Rimes Skill Tab is selected
And the Phrases Activity Icon is selected
When I click on a stimulus tile
And wait 1 second
I should see a phrase containing the selected word

##Feature: Reading Stage 3-8 Onset & Rimes Tiles Activity Stage Content
###Scenario: I want to confirm there are appropriate stage content for Reading Stage 3-8 Onset & Rimes Tiles Activity
Given a student set to Reading Stage 3-8
And the Onset & Rimes Skill Tab is selected
And the Tiles Activity Icon is selected
When I click on a stimulus tile
And wait 1 second
I should see a stack of tiles containing onsets or rimes
And I should see a word split into two sections, one containing an onset and one a rime

#Stage Story
 ============================
##Feature: Stage Story Page Common Features
###Scenario: I want to view Stage Story  Page
Given the selected student is assigned Reading Stage 4-7 and the Stage Stories Skill Tab is selected
When I click on a story title tile
Then I should see a close button, an image, story text, fill button

##Feature: Close Button
###Scenario: I want exit the story and return to the Teacher Workspace
Given I am viewing a page of the story
When I click on the Close Button
Then I should see the story page be replaced to the Teacher Workspace 
And the Stage Story Tab selected

##Feature: Flip Button
###Scenario: I want flip the page so the student can see it 
Given I am viewing a page of the story
When I click on the Flip Button
Then I should see the story page flipped
And story text right side up at the bottom of the page

##Feature: Flip Button
###Scenario: I want unflip the page
Given I am viewing a page of the story flipped
When I click on the Flip Button
Then I should see the story page unflipped
And no story text at the top of the page

##Feature: Show Reading Strategy Button
###Scenario: I want to display the reading strategy for the Reading Stage
Given that the selected student is assigned Reading Stage 4-9
And a page of a Leveled Text is displayed
When I click on the Show Reading Strategies Button
Then at least one reading strategy tile should be displayed
And four assessment buttons should be displayed

##Feature: Hide Reading Strategy Button
###Scenario: I want to hide the reading strategy for the Reading Stage
Given that the selected student is assigned Reading Stage 4-9
And the Reading Strategies are displayed
When I click on the Hide Reading Strategies Button
Then no reading strategy tiles should be displayed
And no assessment buttons should be displayed

##Feature: Assess Reading Strategy
###Scenario: I want to assess a Reading Strategy as Mastered for the Reading Stage
Given that the selected student is assigned Reading Stage 4-9
And the Reading Strategies are displayed
When I click on a Reading Strategy tile which is not assessed as Mastered
Then I should see the assessment for the tile displayed as Mastered. 
(repeat for "Learning", "Needs Work" and "Cleared")

#Leveled Texts 
 ============================
##Feature: Leveled Texts Page Common Features
###Scenario: I want to view Leveled Texts Page
Given the selected student is assigned Reading Stage 1-9 and the Leveled Texts Skill Tab is selected
When I click on a story title tile
Then I should see a close button, an image, story text, fill button

##Feature: Close Button
###Scenario: I want exit the story and return to the Teacher Workspace
Given I am viewing a page of the story
When I click on the Close Button
Then I should see the story page be replaced to the Teacher Workspace 
And the Leveled Text Tab selected

##Feature: Flip Button
###Scenario: I want flip the page so the student can see it 
Given I am viewing a page of the story
When I click on the Flip Button
Then I should see the story page flipped
And story text right side up at the bottom of the page

##Feature: Flip Button
###Scenario: I want unflip the page
Given I am viewing a page of the story flipped
When I click on the Flip Button
Then I should see the story page unflipped
And no story text at the top of the page

##Feature: Show Reading Strategy Button
###Scenario: I want to display the reading strategy for the Reading Stage
Given that the selected student is assigned Reading Stage 4-9
And a page of a Leveled Text is displayed
When I click on the Show Reading Strategies Button
Then at least one reading strategy tile should be displayed
And four assessment buttons should be displayed

##Feature: Hide Reading Strategy Button
###Scenario: I want to hide the reading strategy for the Reading Stage
Given that the selected student is assigned Reading Stage 4-9
And the Reading Strategies are displayed
When I click on the Hide Reading Strategies Button
Then no reading strategy tiles should be displayed
And no assessment buttons should be displayed

##Feature: Assess Reading Strategy
###Scenario: I want to assess a Reading Strategy as Mastered for the Reading Stage
Given that the selected student is assigned Reading Stage 4-9
And the Reading Strategies are displayed
When I click on a Reading Strategy tile which is not assessed as Mastered
Then I should see the assessment for the tile displayed as Mastered. 
(repeat for "Learning", "Needs Work" and "Cleared")

#Edit Student
 ============================
##Feature: Edit Student Page
###Scenario: I want to open the Edit Student Page
Given a Student is Selected
When I click on the Edit Student Icon
Then I should see the Edit Student Page

##Feature: Edit Student Page Close Button
###Scenario: I want to close the Edit Student Page and return to the Teacher Workspace
Given that the Edit Student Page is open
When I click on the Close Button
And Wait for a few seconds
Then I should see the Edit Student Page replaced by the Teacher Workspace

##Feature: Edit Student Page Done Button
###Scenario: I want to close the Edit Student Page and return to the Teacher Workspace
Given that the Edit Student Page is open
When I click on the Done Button
And Wait for a few seconds
Then I should see the Edit Student Page replaced by the Teacher Workspace

##Feature: Add note
###Scenario: I want to add a note
Given that the Edit Student Page is open and the Notes tab is selected
When I click inside the text input field and type
And click Save
Then I should see today's date and the text entered in a note at the top of the list

##Feature: Edit note
###Scenario: I want to edit an existing note
Given that the Edit Student Page is open and the Notes tab is selected and there is an existing note in the note list
When I click on an existing note in the list
Then I should see the text of the note in the text input field
And I should see the date the note was taken above the input field
And the Selected note should be highlighted in the note list

#Add Student to Session
 ============================
##Feature: Open Add Student Page
###Scenario: I want to open the Add Student Page
Given that fewer than 6 students have been added to the session
When I click on a student tab that displays the text "Student"
And wait a second
Then I should see the Add Student page replace the Teacher Workspace

##Feature: Cancel Add Student Page Tab
###Scenario: I want to cancel the Add Student Page
Given that the Add Student Page is displayed
When I click on the Cancel Tab
I should see the Add Student Page be replaced by theTeacher Workspace 

##Feature: Cancel Add Student Page Button
###Scenario: I want to cancel the Add Student Page
Given that the Add Student Page is displayed
When I click on the Cancel Button
I should see the Add Student Page be replaced by theTeacher Workspace 

##Feature: Add Student Button
###Scenario: I want to add a student to the session
Given that the Add Student Page is displayed
When I click on the Add Student button for Student X
Then I should see the Add Student Page be replaced with the Teacher Workspace
And I should see the name of Student X added to a student tab
