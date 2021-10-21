import React from 'react'
import { shallow } from 'enzyme'
import NumberOfEvents from '../NumberOfEvents'

describe('<NumberOfEvents /> component', () => {
  test('textbox rendering', () => {
    let NumberOfEventsWrapper = shallow(<NumberOfEvents />)
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1)
  })
})
