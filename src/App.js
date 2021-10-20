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
        allEvents: [],
        events: [],
        locations: [],
        currentLocation: '',
        numberOfEvents: localStorage.getItem('numberOfEvents') || 32,
    }
    componentDidMount() {
        this.mounted = true
        getEvents().then((events) => {
            if (this.mounted) {
                this.setState({
                    events: events.slice(0, this.state.numberOfEvents),
                    locations: extractLocations(events),
                    allEvents: events,
                })

                //use this array instead of getEvents() on each update
                this.setState({ allEvents: events })
            }
        })
    }
    componentWillUnmount() {
        this.mounted = false
    }
    //TODO fix number change defaulting location
    updateEvents = (location, eventCount) => {
        let events = this.state.allEvents
        if (!eventCount) {
            this.setState({ currentLocation: location })
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
    }

    render() {
        const { events, locations, numberOfEvents } = this.state
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Navbar bg="light" expand="xxl">
                            <Navbar.Brand>
                                {/* <img
                                    alt=""
                                    src=""
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                /> */}
                                Meet
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="inputFields">
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
                    <EventList events={events} />
                </Container>
            </div>
        )
    }
}
export default App
