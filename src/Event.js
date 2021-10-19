import React, { Component } from 'react'
import Card from 'react-bootstrap/card'
import Button from 'react-bootstrap/button'

class Event extends Component {
    state = {
        collapsed: true,
        // showDescription: false
    }

    convertDate(date) {
        const newDate = new Date(date).toString().slice(3, 21)
        return newDate
    }

    timeFromDate(date) {
        const newDate = new Date(date).toString().slice(15, 21)
        return newDate
    }

    render() {
        const { event } = this.props
        const { collapsed } = this.state

        return (
            <div className="eventWrapper">
                <Card className="event-card">
                    <Card.Body>
                        <Card.Title className="event-summary">
                            {event.summary}
                        </Card.Title>
                        <Card.Text className="event-details">
                            {event.location}
                            {new Date(event.start.dateTime).toString().slice(3, 21)}
                        </Card.Text>
                        <Card.Text
                            className={`event-description ${
                                collapsed ? 'd-none' : ''
                            }`}
                        >
                            {event.description}
                        </Card.Text>
                        <Button
                            onClick={() =>
                                this.setState({ collapsed: !collapsed })
                            }
                            className="event-toggle-button"
                            variant="primary"
                        >
                            {collapsed ? 'Show Details' : 'Hide Details'}
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Event
