import React from 'react'
import { shallow, mount } from 'enzyme'
import App from '../components/App'
import EventList from '../components/EventList'
import CitySearch from '../components/CitySearch'
import NumberOfEvents from '../components/NumberOfEvents'
import { mockData } from '../mock-data'
import { extractLocations, getEvents } from '../api'

describe('<App /> component', () => {
  let AppWrapper
  beforeAll(() => {
    AppWrapper = shallow(<App />)
  })

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1)
  })

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1)
  })

  test('render numberOfEvents', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1)
  })
})

describe('<App /> integration', () => {
  let AppWrapper
  beforeEach(() => {
    // AppWrapper = mount(<App />)
  })
  afterEach(() => {
    // AppWrapper.unmount()
  })

  test('App passes "events" state as a prop to EventList', () => {
    AppWrapper = mount(<App />)
    const AppEventsState = AppWrapper.state('displayedEvents')
    expect(AppEventsState).not.toEqual(undefined)
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState)
    AppWrapper.unmount()
  })

  test('App passes "locations" state as a prop to CitySearch', () => {
    AppWrapper = mount(<App />)
    const AppLocationsState = AppWrapper.state('locations')
    expect(AppLocationsState).not.toEqual(undefined)
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(
      AppLocationsState
    )
    AppWrapper.unmount()
  })

  test('get list of events matching the city selected by the user', async () => {
    AppWrapper = mount(<App />)
    const CitySearchWrapper = AppWrapper.find(CitySearch)
    const locationsData = extractLocations(mockData)
    const selectedCity = locationsData[0]
    await CitySearchWrapper.instance().handleItemClicked(selectedCity)
    const allEvents = await getEvents()
    const eventsToShow = allEvents.filter(
      (event) => event.location === selectedCity
    )
    AppWrapper.setState({
      events: eventsToShow,
      numberOfEvents: 1,
    })
    expect(AppWrapper.state('events')).toEqual(eventsToShow)
    AppWrapper.unmount()
  })

  test('get list of all events when user selects "See all cities"', async () => {
    AppWrapper = mount(<App />)
    const CitySearchWrapper = AppWrapper.find(CitySearch)
    const allCities = CitySearchWrapper.find('all-cities')
    await CitySearchWrapper.instance().handleItemClicked(allCities)
    const allEvents = await getEvents()
    const eventsToShow = allEvents.filter(
      (event) => event.location === allCities
    )
    AppWrapper.setState({
      events: eventsToShow,
      numberOfEvents: 1,
    })
    expect(AppWrapper.state('events')).toEqual(eventsToShow)
    AppWrapper.unmount()
  })

  test('App passes "numberOfEvents" state as a prop to NumberOfEvents', () => {
    AppWrapper = mount(<App />)
    const AppNumberOfEventsState = AppWrapper.state('numberOfEvents')
    expect(AppNumberOfEventsState).not.toEqual(undefined)
    expect(AppNumberOfEventsState).not.toBeGreaterThan(64)
    expect(AppNumberOfEventsState).not.toBeLessThan(1)
    expect(AppWrapper.find(NumberOfEvents).props().numberOfEvents).toEqual(
      AppNumberOfEventsState
    )
    AppWrapper.unmount()
  })

  test('App numberOfEvents state equals input from NumberOfEvents', async () => {
    let AppWrapper = mount(<App />)
    AppWrapper.setState({ numberOfEvents: 32 })
    const numEventsInputWrapper = AppWrapper.find(NumberOfEvents)
    const eventObject = { target: { value: 1 } }
    numEventsInputWrapper.find('input').simulate('change', eventObject)
    expect(AppWrapper.state('numberOfEvents')).toEqual(1)
    AppWrapper.unmount()
  })

  test('Events component displays the correct number of events', async () => {
    let AppWrapper = mount(<App />)
    const eventsNumber = 2
    const allEvents = await getEvents()
    AppWrapper.setState({
      displayedEvents: allEvents.slice(0, eventsNumber),
    })
    expect(AppWrapper.find(EventList).props().events.length).toEqual(
      eventsNumber
    )
    AppWrapper.unmount()
  })
})
