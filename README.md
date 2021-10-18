# meet
a serverless, progressive web application (PWA) with React using a test-driven
development (TDD) technique.
## Description
The application uses the Google Calendar API to fetch nupcoming events.

## Built With
React 

## Tools
AWS

## Formatting / Validations
Prettier / Eslint

## Documentation

### As a user, I should be able to toggle an event’s details, so that I can know more about an event without having to constantly display all details

### SCENARIO 1: An event element is collapsed by default
SCENARIO 1: An event element is collapsed by default
Given user hasn’t clicked on an event
When the user opens the app
Then the user should a collapsed version of the events

### SCENARIO 2: User can expand an event to see its details
SCENARIO 2: User can expand an event to see its details
Given the main page is open
When user clicks the ‘Show Details’ button on an event
Then the user should see an expanded version of the event

### SCENARIO 3: User can collapse an event to hide its details
SCENARIO 3: User can collapse an event to hide its details
Given an event is expanded and showing details
When the user clicks on the event’s ‘Hide Details’ button
Then the event should collapse
@@ -49,30 +49,31 @@ Scenario 2: User can change the number of events they want to see

### As a user, I should be able to change the number of events displayed, so that I can control the amount of data shown on the app

### SCENARIO 1:  When user hasn’t specified a number, 32 is the default number
SCENARIO 1:  When user hasn’t specified a number, 32 is the default number
Given user hasn’t changed the default number of events
When the user opens the app
Then the app’s number of events should be 32

### SCENARIO 2:  User can change the number of events they want to see
SCENARIO 2:  User can change the number of events they want to see
Given the main page is open
When user changes the value in the “Number of Events” input
Then the user should see the chosen number of events


### FEATURE 4: USE THE APP WHEN OFFLINE

### Scenario 1: Show cached data when there’s no internet connection
Scenario 1: Show cached data when there’s no internet connection

### Scenario 2: Show error when user changes the settings (city, time range)
As a developer, I should be able to display data to the user even when offline, so that the app won’t become completely irrelevant while there’s no internet connection
Scenario 2: Show error when user changes the settings (city, time range)

### SCENARIO 1:  Show cached data when there’s no internet connection
### As a developer, I should be able to display data to the user even when offline, so that the app won’t become completely irrelevant while there’s no internet connection

SCENARIO 1:  Show cached data when there’s no internet connection
Given app is offline
When the user opens the app
Then the events should present details from cache

### SCENARIO 2:  Show error when user changes the settings (city, time range)
SCENARIO 2:  Show error when user changes the settings (city, time range)
Given app is offline
When the user tries to change input field settings that cannot be changed offline
Then the app should display an error message

## Live app
https://nikosardas.github.io/meet/
