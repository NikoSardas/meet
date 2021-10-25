import React, { Component } from 'react'

import EventList from './EventList'
import CitySearch from './CitySearch'
import NumberOfEvents from './NumberOfEvents'
import WelcomeScreen from '../WelcomeScreen.jsx'

import { getEvents, extractLocations, checkToken, getAccessToken } from '../api'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

import '../styles/App.css'
import logo from './wickedbackgrounds.svg'
import { WarningAlert } from './Alert'

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
    localStorage.setItem('access_token', '')
    this.componentDidMount()
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
              <svg src={logo}></svg>
              <Navbar.Brand>Meet</Navbar.Brand>
              <WarningAlert
                text={!navigator.onLine ? 'No internet connection' : ''}
              ></WarningAlert>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="inputFields">
                  <Button
                    className="protfolio-link mb-3"
                    onClick={() => {
                      window.open('nikosardas.com/')
                    }}
                  >
                    Niko Sardas
                  </Button>
                  <Button className="logout-button mb-3" onClick={this.logOut}>
                    Logout
                  </Button>
                  <div>
                    <NumberOfEvents
                      numberOfEvents={numberOfEvents}
                      updateEvents={this.updateEvents}
                    />
                  </div>
                  <div>
                    <CitySearch
                      locations={locations}
                      updateEvents={this.updateEvents}
                    />
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
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
