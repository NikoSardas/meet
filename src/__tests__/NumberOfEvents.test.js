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
    test('textbox default num', () => {
        expect(
            NumberOfEventsWrapper.find('.events-number').prop('value')
        ).toEqual(32)
    })
    test('textbox number change', () => {
        NumberOfEventsWrapper.setState({
            numEvents: 32,
        })
        NumberOfEventsWrapper.find('.events-number').simulate('change', {
            target: { value: 20 },
        })
        expect(NumberOfEventsWrapper.state('eventsNumber')).toEqual(20)
    })
    test('textbox input below 1', () => {
        NumberOfEventsWrapper.setState({
            numEvents: 32,
        })
        NumberOfEventsWrapper.find('.events-number').simulate('change', {
            target: { value: -2 },
        })
        expect(NumberOfEventsWrapper.state('eventsNumber')).toEqual(1)
    })
    test('textbox input above 64', () => {
        NumberOfEventsWrapper.setState({
            numEvents: 32,
        })
        NumberOfEventsWrapper.find('.events-number').simulate('change', {
            target: { value: 123 },
        })
        expect(NumberOfEventsWrapper.state('eventsNumber')).toEqual(64)
    })
    test('textbox input is not a number', () => {
        NumberOfEventsWrapper.setState({
            numEvents: 32,
        })
        NumberOfEventsWrapper.find('.events-number').simulate('change', {
            target: { value: 'a' },
        })
        expect(NumberOfEventsWrapper.state('eventsNumber')).toEqual(64)
    })
})
