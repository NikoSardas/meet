import React from 'react'
import { shallow } from 'enzyme'
import CitySearch from '../CitySearch'
import { mockData } from '../mock-data'
import { extractLocations } from '../api'

describe('<CitySearch /> component', () => {
  let locations, CitySearchWrapper

  beforeAll(() => {
    locations = extractLocations(mockData)
    CitySearchWrapper = shallow(
      <CitySearch locations={locations} updateEvents={() => {}} />
    )
  })
  test('render text input', () => {
    expect(CitySearchWrapper.find('.displayed-selection')).toHaveLength(1)
  })
  test('renders a list of suggestions', () => {
    expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1)
  })
})
