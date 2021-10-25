import React, { Component } from 'react'

import EventList from './EventList'
import CitySearch from './CitySearch'
import NumberOfEvents from './NumberOfEvents'
import WelcomeScreen from '../WelcomeScreen.jsx'

import { getEvents, extractLocations, checkToken, getAccessToken } from '../api'

import { WarningAlert } from './Alert'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import logo from './wickedbackground.svg'
import '../styles/App.css'

class App extends Component {
  state = {
    allEvents: [],
    displayedEvents: [],
    locations: [],
    currentLocation: '',
    numberOfEvents: 32,
    showWelcomeScreen: undefined,
  }
  async componentDidMount() {
    this.mounted = true

    const accessToken = localStorage.getItem('access_token')
    const isTokenValid = (await checkToken(accessToken)).error ? false : true
    const searchParams = new URLSearchParams(window.location.search)
    const code = searchParams.get('code')
    console.log(accessToken, isTokenValid, searchParams, code)

    this.setState({ showWelcomeScreen: !(code || isTokenValid) })

    if ((code || isTokenValid) && this.mounted) {
    getEvents().then((events) => {
      console.log('getEvents', events)
      const allEvents = events

      if (this.mounted) {
        this.setState({
          displayedEvents: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events),
          allEvents,
          currentLocation: 'See all cities',
        })
      }
    })
    }
  }

  componentWillUnmount() {
    this.mounted = false
  }

  updateEvents = (location, eventCount) => {
    let allEvents = this.state.allEvents

    if (!eventCount) {
      eventCount = this.state.numberOfEvents
      this.setState({ currentLocation: location })
    }
    if (!location) {
      location = this.state.currentLocation
      this.setState({
        numberOfEvents: eventCount,
      })
    }

    let events =
      location === 'See all cities'
        ? allEvents
        : allEvents.filter((event) => event.location === location)

    this.setState({
      displayedEvents: events.slice(0, eventCount),
    })
  }

  logOut = () => {
    localStorage.removeItem('access_token')
    this.componentDidMount()
  }

  getData = () => {
    const { locations, displayedEvents } = this.state
    const data = locations.map((location) => {
      const number = displayedEvents.filter(
        (event) => event.location === location
      ).length
      const city = location.split(', ').shift()
      return { city, number }
    })
    return data
  }

  render() {
    const { displayedEvents, locations, numberOfEvents, showWelcomeScreen } =
      this.state
    if (showWelcomeScreen === undefined) {
      return <div className="App" />
    }
    return (
      <div className="App">
        <Container>
          <Row>
            <Navbar expand="nope">
              <div>
                <img className="navbar-logo" src={logo} />
                <Navbar.Brand className="meet-logo">Meet</Navbar.Brand>
              </div>
              <WarningAlert
                text={!navigator.onLine ? 'No internet connection' : ''}
              ></WarningAlert>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="inputFields">
                  <Button
                    className="portfolio-link"
                    onClick={() => {
                      window.open('https://nikosardas.github.io/meet')
                    }}
                  >
                    By Niko Sardas
                  </Button>
                  <Button className="logout-button mb-1" onClick={this.logOut}>
                    Logout
                  </Button>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          {/* </Row> */}
          <ResponsiveContainer height={400}>
            <ScatterChart
              width={400}
              height={400}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis
                type="number"
                dataKey="number"
                name="number of events"
                allowDecimals={false}
              />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
          {/* <Row> */}
            <div className="number-of-events-wrapper">
              <NumberOfEvents
                numberOfEvents={numberOfEvents}
                updateEvents={this.updateEvents}
              />
            </div>
            <div className="city-search-wrapper">
              <CitySearch
                locations={locations}
                updateEvents={this.updateEvents}
              />
            </div>
          </Row>
          <EventList events={displayedEvents} />
        </Container>
        <WelcomeScreen
          showWelcomeScreen={showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken()
          }}
        />
      </div>
    )
  }
}
export default App
