import React from 'react'
import { shallow } from 'enzyme'
import NumberOfEvents from '../NumberOfEvents'

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />)
    })
    test('textbox rendering', () => {
        expect(NumberOfEventsWrapper.find('.events-number')).toHaveLength(1)
    })

})
