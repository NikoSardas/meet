import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
class Event extends Component {
    state = {
        collapsed: true,
    }
    toggleCollapsed() {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }
    render() {
        const { event } = this.props
        return (
            <div className="eventWrapper">
                <Card>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title className="event-summary">
                            {event.summary}
                        </Card.Title>
                        <Card.Text className="event-location">
                            {event.location}
                        </Card.Text>
                        <Card.Text className="event-timeZone">
                            {event.timeZone}
                        </Card.Text>
                        <Card.Text className="event-start">
                            {event.start.dateTime}
                        </Card.Text>
                        <Card.Text className="event-end">{event.end.dateTime}</Card.Text>
                        <div
                            className={`event-expanded ${!this.state
                                .collapsed}`}
                        >
                            <Card.Text className="event-description">
                                {event.description}
                            </Card.Text>
                        </div>
                        <Button
                            className="event-toggle-button"
                            variant="primary"
                            onClick={() => {
                                this.toggleCollapsed()
                            }}
                        >
                            {this.state.collapsed
                                ? 'Show Details'
                                : 'Hide Details'}
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Event
