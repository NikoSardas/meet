import React, { Component } from 'react'
import Event from './Event'
import ListGroup from 'react-bootstrap/ListGroup'

class EventList extends Component {
    render() {
        const { events } = this.props
        return (
            <div className="EventList row">
                {events.map((event) => (
                    <div
                        className="col-sm-12 col-md-6 col-lg-4 event-card-wrapper"
                        key={event.etag}
                    >
                        <Event event={event} />
                    </div>
                ))}
            </div>
        )
    }
}

export default EventList
