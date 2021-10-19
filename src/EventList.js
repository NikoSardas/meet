import React, { Component } from 'react'
import Event from './Event'

class EventList extends Component {
    render() {
        const { events } = this.props
        return (
            <ul className="EventList row">
                {events.map((event) => (
                    <li
                        className="col-sm-12 col-md-6 col-lg-4 event-card-wrapper"
                        key={event.etag}
                    >
                        <Event event={event} />
                    </li>
                ))}
            </ul>
        )
    }
}

export default EventList
