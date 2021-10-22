Feature: Show/hide an event's details

Scenario: An event element is collapsed by default
Given user hasn’t clicked on an event
When the user opens the app
Then the user should see a collapsed version of the events

Scenario: User can expand an event to see its details
Given the main page is open
When user clicks the ‘Show Details’ button on an event
Then the user should see an expanded version of the event

Scenario: User can collapse an event to hide its details
Given an event is expanded and showing details
When the user clicks on the event’s ‘Hide Details’ button
Then the event should collapse