import React from 'react'
import { loadFeature, defineFeature } from 'jest-cucumber'
import { mount } from 'enzyme'

import App from '../components/App'

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature')
let AppWrapper

defineFeature(feature, (test) => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('user hasn’t clicked on an event', () => {})
    when('the user opens the app', () => {
      AppWrapper = mount(<App />)
    })
    then('the user should see a collapsed version of the events', () => {
      AppWrapper.update()
      expect(AppWrapper.find('.d-none').hostNodes()).toHaveLength(
        AppWrapper.state('displayedEvents').length
      )
    })
  })

  test('User can expand an event to see its details', ({
    given,
    when,
    then,
  }) => {
    given('the main page is open', () => {
      AppWrapper = mount(<App />)
    })
    when('user clicks the ‘Show Details’ button on an event', () => {
      AppWrapper.update()
      AppWrapper.find('.event-card-body').hostNodes().first().simulate('click')
    })
    then('the user should see an expanded version of the event', () => {
      expect(AppWrapper.find('.d-none').hostNodes()).toHaveLength(
        AppWrapper.state('displayedEvents').length - 1
      )
    })
  })

  test('User can collapse an event to hide its details', ({
    given,
    when,
    then,
  }) => {
    given('an event is expanded and showing details', async () => {
      AppWrapper = await mount(<App />)
      AppWrapper.update()
      AppWrapper.find('.event-card-body').hostNodes().first().simulate('click')
      expect(AppWrapper.find('.d-none').hostNodes()).toHaveLength(
        AppWrapper.state('displayedEvents').length - 1
      )
    })
    when('the user clicks on the event’s ‘Hide Details’ button', () => {
      AppWrapper.find('.event-card-body').hostNodes().first().simulate('click')
    })
    then('the event should collapse', () => {
      expect(AppWrapper.find('.d-none').hostNodes()).toHaveLength(
        AppWrapper.state('displayedEvents').length
      )
    })
  })
})
