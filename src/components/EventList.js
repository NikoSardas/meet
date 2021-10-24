import React, { Component } from 'react'
import Event from './Event'

class EventList extends Component {
  render() {
    const { events } = this.props
    let key = 0
    return (
      <div className="EventList row">
        {events.map((event) => (
          <div
            className="col-sm-12 col-md-6 col-lg-3 event-card-wrapper"
            key={++key}
          >
            <Event event={event} />
          </div>
        ))}
      </div>
    )
  }
}

export default EventList
