import React, { Component } from 'react'
import Event from './Event'

class EventList extends Component {
    render() {
        const { events } = this.props
        return (
            <div className="EventList row">
                {events.map((event) => (
                    <div
                        className="col-sm-12 col-md-6 col-xxl-6 event-card-wrapper"
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
