import React, { Component } from 'react'
import Card from 'react-bootstrap/card'
// import Button from 'react-bootstrap/button'

class Event extends Component {
    state = {
        collapsed: true,
    }

    render() {
        const { event } = this.props
        const { collapsed } = this.state

        return (
            <Card className="event-card">
                <Card.Body
                    className="event-card-body"
                    onClick={() => this.setState({ collapsed: !collapsed })}
                >
                    <div className="card-top">
                        {/* <div className="card-top-left"> */}
                        <Card.Title className="event-summary">
                            {event.summary}
                        </Card.Title>
                        <Card.Text className="event-details">
                            {event.location}
                            <br />
                            {new Date(event.start.dateTime)
                                .toString()
                                .slice(3, 21)}
                        </Card.Text>
                        {/* </div> */}
                        {/* <div className="card-top-right"> */}
                        {/* <Button
                                onClick={() =>
                                    this.setState({ collapsed: !collapsed })
                                }
                                className="event-toggle-button"
                                variant="outline-secondary"
                            >
                                {collapsed ? 'Show Details' : 'Hide Details'}
                            </Button> */}
                        {/* </div> */}
                    </div>
                    <Card.Text
                        className={`event-description ${
                            collapsed ? 'd-none' : ''
                        }`}
                    >
                        {event.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Event
