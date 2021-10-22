import React from 'react'
import { loadFeature, defineFeature } from 'jest-cucumber'
import { mount, shallow } from 'enzyme'

import CitySearch from '../components/CitySearch'
import App from '../components/App'
import { mockData } from '../mock-data'
import { extractLocations } from '../../src/api.js'

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature')
let AppWrapper

defineFeature(feature, (test) => {
  test('When user has not specified a number, 32 is the default number', ({
    given,
    when,
    then,
  }) => {
    given('user has not changed the default number of events', () => {})

    when('the user opens the app', async () => {
      AppWrapper = await mount(<App />)
    })

    then('the apps number of events should be 32', () => {
      AppWrapper.update()
      expect(AppWrapper.state('displayedEvents')).toHaveLength(32)
    })
  })

  test('User can change the number of events they want to see', ({
    given,
    when,
    then,
  }) => {
    given('the main page is open', () => {
      AppWrapper = mount(<App />)
    })

    when('user changes the value in the “Number of Events” input', () => {
      AppWrapper.find('#formRangeSlider').simulate('change', {
        target: { value: 2 },
      })
    })

    then('the user should see the chosen number of events', () => {
      expect(AppWrapper.state('displayedEvents')).toHaveLength(2)
    })
  })
})
