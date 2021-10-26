import React, { Component } from 'react'
// import React, { Component, PureComponent } from 'react'

import EventList from './EventList'
import CitySearch from './CitySearch'
import NumberOfEvents from './NumberOfEvents'
import Charts from './Charts'
import WelcomeScreen from '../WelcomeScreen.jsx'

import { getEvents, extractLocations, checkToken, getAccessToken } from '../api'

import { WarningAlert } from './Alert'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

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
    const isTokenValid = (await checkToken(accessToken)).error ? false : true //original
    // const isTokenValid = (await checkToken(accessToken)).error ? true : false
    const searchParams = new URLSearchParams(window.location.search)
    const code = searchParams.get('code')
    // console.log('accessToken', accessToken)
    // console.log('isTokenValid', isTokenValid)
    // console.log('searchParams', searchParams)
    // console.log('code', code)
    this.setState({ showWelcomeScreen: !(code || isTokenValid) })

    if ((code || isTokenValid) && this.mounted) {
    getEvents().then((events) => {
      console.log('getEvents events', events)
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

  render() {
    const { displayedEvents, locations, numberOfEvents, showWelcomeScreen } =
      this.state
    // if (showWelcomeScreen === undefined) {
    //   return <div className="App" />
    // }
    return (
      <div className="App">
        <Container>
          <Row>
            <WarningAlert
              text={!navigator.onLine ? 'No internet connection' : ''}
            ></WarningAlert>
            <Navbar expand="nope">
              <div>
                <img className="navbar-logo" alt="Logo" src={logo} />
                <Navbar.Brand className="meet-logo">Meet</Navbar.Brand>
              </div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="inputFields">
                  <div className="buttons">
                    {/* <Button
                      variant="outline-secondary"
                      className="portfolio-link mt-2"
                      onClick={() => {
                        window.open('http://www.nikosardas.com/')
                      }}
                    >
                      By Niko Sardas
                    </Button> */}
                    <Button
                      variant="outline-secondary"
                      className="logout-button mt-2"
                      onClick={this.logOut}
                    >
                      Logout
                    </Button>
                  </div>
                  <div className="inputs">
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
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Row>
          {/* <Row>
            <Charts />
          </Row> */}
          <EventList events={displayedEvents} />
        </Container>
        {/* <WelcomeScreen
          showWelcomeScreen={showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken()
          }}
        /> */}
      </div>
    )
  }
}
export default App
