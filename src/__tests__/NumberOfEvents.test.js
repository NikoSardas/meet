import React from 'react'
import { shallow } from 'enzyme'
import NumberOfEvents from '../components/NumberOfEvents'

describe('<NumberOfEvents /> component', () => {
  test('textbox rendering', () => {
    let NumberOfEventsWrapper = shallow(<NumberOfEvents />)
    expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1)
  })
})
