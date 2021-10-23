//TODO find image location
//TODO expand animation

import React, { Component } from 'react'

import EventList from './EventList'
import CitySearch from './CitySearch'
import NumberOfEvents from './NumberOfEvents'
import { extractLocations, getEvents } from '../api.js'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import '../styles/App.css'

class App extends Component {
  state = {
    allEvents: [],
    displayedEvents: [],
    locations: [],
    currentLocation: '',
    numberOfEvents: 32,
  }
  componentDidMount() {
    this.mounted = true
    getEvents().then((events) => {
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
  render() {
    const { displayedEvents, locations, numberOfEvents } = this.state
    return (
      <div className="App">
        <Container>
          <Row>
            <Navbar expand="nope">
              <Navbar.Brand>
                Meet
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="inputFields">
                {/* <div className="portfolio-link">
                    <a
                      className="portfolio-link"
                      href="https://www.nikosardas.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      By Niko Sardas
                    </a>
                  </div> */}
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
      </div>
    )
  }
}
export default App
