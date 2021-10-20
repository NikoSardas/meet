import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

class NumberOfEvents extends Component {
    changeEventsNumber(eventsNumber) {
        if (eventsNumber > 64) eventsNumber = 64
        if (eventsNumber < 1) eventsNumber = 1
        this.props.updateEvents(undefined, eventsNumber)
        localStorage.setItem('numberOfEvents', eventsNumber)
    }
    render() {
        const { numberOfEvents } = this.props
        return (
            <div className="numberOfEvents">
                <Form>
                    <Form.Group className="mb-2">
                        <Form.Label>Max displayed events</Form.Label>
                        <Form.Control
                            type="number"
                            min="1"
                            max="64"
                            value={numberOfEvents}
                            // onSubmit={(e)=>{e.preventDefault()}}
                            onChange={(e) => {
                                this.changeEventsNumber(e.target.value)
                            }}
                            placeholder="Enter city name"
                        />
                        {/* <Form.Text className="text-muted">
                            for later
                        </Form.Text> */}
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default NumberOfEvents
