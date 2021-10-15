import React, { Component } from 'react'

class NumberOfEvents extends Component {
    state = {
        eventsNumber: localStorage.getItem('eventsNumber') || 32,
    }

    changeEventsNumber(eventsNumber) {
        if (eventsNumber > 64) eventsNumber = 64
        if (eventsNumber < 1) eventsNumber = 1
        if (isNaN(eventsNumber)) eventsNumber = this.state.eventsNumber

        this.setState(
            {
                eventsNumber,
            },
            () => {
                localStorage.setItem('eventsNumber', eventsNumber)
            }
        )
    }
    render() {
        const { eventsNumber } = this.state
        return (
            <div>
                <input
                    className="events-number"
                    type="number"
                    value={eventsNumber}
                    onChange={(e) => {
                        this.changeEventsNumber(e.target.value)
                    }}
                />
            </div>
        )
    }
}

export default NumberOfEvents
