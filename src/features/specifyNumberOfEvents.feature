Feature: specify number of events

Scenario: When user has not specified a number, 32 is the default number
Given user has not changed the default number of events
When the user opens the app
Then the apps number of events should be 32

Scenario: User can change the number of events they want to see
Given the main page is open
When user changes the value in the “Number of Events” input
Then the user should see the chosen number of events