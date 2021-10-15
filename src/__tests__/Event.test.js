import React from 'react'
import { shallow } from 'enzyme'
import Event from '../Event'
import { mockData } from '../mock-data'

describe('<Event /> component', () => {
    let eventWrapper
    let event = mockData[0]
    beforeAll(() => {
        eventWrapper = shallow(<Event event={event} />)
    })
    test('Event collapsed by default', () => {
        eventWrapper.setState({
            collapsed: true,
        })
        expect(eventWrapper.find('.event-expanded').hasClass('false')).toEqual(
            true
        )
    })
    test('Show details on expansion', () => {
        eventWrapper.setState({
            collapsed: false,
        })
        expect(eventWrapper.find('.event-expanded').hasClass('true')).toEqual(
            true
        )
    })
    test('Toggle state action', () => {
        const collapsedState = eventWrapper.state('collapsed')
        eventWrapper.setState({
            collapsed: collapsedState,
        })
        eventWrapper.find('.event-toggle-button').simulate('click')
        expect(eventWrapper.state('collapsed')).toBe(!collapsedState)
    })
    test('Make sure all details are rendered', () => {
        const classesArray = [
            'event-summary',
            'event-description',
            'event-location',
            'event-timeZone',
            'event-start',
            'event-end',
        ]
        classesArray.map((eventClass) => {
            expect(eventWrapper.find(`.${eventClass}`)).toHaveLength(1)
        })
    })
})
