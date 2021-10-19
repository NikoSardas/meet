import React, { Component } from 'react'

import EventList from './EventList'
import CitySearch from './CitySearch'
import NumberOfEvents from './NumberOfEvents'
import { extractLocations, getEvents } from './api.js'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './App.css'

class App extends Component {
    state = {
        events: [],
        locations: [],
        numberOfEvents: localStorage.getItem('numberOfEvents') || 32,
    }
    componentDidMount() {
        this.mounted = true
        getEvents().then((events) => {
            if (this.mounted) {
                this.setState({ events, locations: extractLocations(events) })
            }
        })
    }
    componentWillUnmount() {
        this.mounted = false
    }
    updateEvents = (location, eventCount) => {
        getEvents().then((events) => {
            if (!eventCount) {
                eventCount = this.state.numberOfEvents
                events =
                    location === 'all'
                        ? events
                        : events.filter((event) => event.location === location)
            }
            this.setState({
                events: events.slice(0, eventCount),
                numberOfEvents: eventCount,
            })
        })
    }
    render() {
        const { events, locations, numberOfEvents } = this.state
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Navbar bg="light" expand="xlg">
                            <Navbar.Brand>
                                <img
                                    alt=""
                                    src="/%PUBLIC_URL%/loading-buffering.gif"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                />{' '}
                                Meet
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="inputFields">
                                    <Nav.Link>
                                        <NumberOfEvents
                                            numberOfEvents={numberOfEvents}
                                            updateEvents={this.updateEvents}
                                        />
                                    </Nav.Link>
                                    <Nav.Link>
                                        <CitySearch
                                            locations={locations}
                                            updateEvents={this.updateEvents}
                                        />
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Row>
                    <EventList events={events} />
                </Container>
            </div>
        )
    }
}
export default App
