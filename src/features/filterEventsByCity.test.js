import React from 'react'
import { loadFeature, defineFeature } from 'jest-cucumber'
import { mount, shallow } from 'enzyme'

import CitySearch from '../components/CitySearch'
import App from '../components/App'
import { mockData } from '../mock-data'
import { extractLocations } from '../../src/api.js'

const feature = loadFeature('./src/features/filterEventsByCity.feature')
let AppWrapper
let CitySearchWrapper

defineFeature(feature, (test) => {
  test('When user hasn’t searched for a city, show upcoming events from all cities.', ({
    given,
    when,
    then,
  }) => {
    given('user hasn’t searched for any city', () => {})

    when('the user opens the app', () => {
      AppWrapper = mount(<App />)
    })

    then('the user should see the list of upcoming events.', () => {
      AppWrapper.update()
      expect(AppWrapper.find('.event-card-wrapper')).toHaveLength(
        AppWrapper.state('displayedEvents').length
      )
    })
  })

  test('User should see a list of suggestions when they search for a city', ({
    given,
    when,
    then,
  }) => {
    given('the main page is open', () => {
      CitySearchWrapper = shallow(
        <CitySearch
          updateEvents={() => {}}
          locations={extractLocations(mockData)}
        />
      )
    })
    when('the user clicks on the dropdown button', () => {
      CitySearchWrapper.find('.displayed-selection').simulate('change', {
        target: { value: 'Berlin' },
      })
    })

    then('the user should receive a list of cities (suggestions)', () => {
      expect(CitySearchWrapper.find('.all-cities')).toHaveLength(1)
    })
  })

  test('User can select a city from the suggested list', ({
    given,
    and,
    when,
    then,
  }) => {
    given('user has selected “Berlin” in the city menu', async () => {
      AppWrapper = await mount(<App />)
      expect(AppWrapper.find('.dropdown-toggle').hostNodes().simulate('click'))
    })

    and('the list of suggested cities is showing', () => {
      expect(AppWrapper.find('.city .dropdown-item').hostNodes()).toHaveLength(
        extractLocations(mockData).length
      )
    })

    when(
      'the user selects a city (e.g., “Berlin, Germany”) from the list',
      () => {
        AppWrapper.find('.city').at(3).simulate('click')
      }
    )

    then(
      'their city should be changed to that city (i.e., “Berlin, Germany”)',
      () => {
        expect(
          AppWrapper.find('.displayed-selection')
            .text()
            .includes('Berlin, Germany')
        ).toBe(true)
      }
    )

    and(
      'the user should receive a list of upcoming events in that city',
      () => {
        expect(AppWrapper.find('.event-card').hostNodes()).toHaveLength(
          AppWrapper.state('displayedEvents').length
        )
      }
    )
  })
})
