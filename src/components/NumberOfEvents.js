import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

class NumberOfEvents extends Component {
  changeEventsNumber(eventsNumber) {
    if (eventsNumber > 64) eventsNumber = 64
    if (eventsNumber < 1) eventsNumber = 1
    this.props.updateEvents(undefined, eventsNumber)
  }
  render() {
    const { numberOfEvents } = this.props
    return (
      <div className="numberOfEvents">
        <Form
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <Form.Group
            className="number-of-events mt-3"
            controlId="formRangeSlider"
          >
            <Form.Control
              className="number-slider"
              type="range"
              min="1"
              max="64"
              value={numberOfEvents}
              onChange={(e) => {
                this.changeEventsNumber(e.target.value)
              }}
            />
            <Form.Text className="text-muted">
              Events displayed: {numberOfEvents}
            </Form.Text>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default NumberOfEvents
