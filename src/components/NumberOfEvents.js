import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { ErrorAlert } from './Alert'

class NumberOfEvents extends Component {
  state = {
    ErrorText: '',
  }

  changeEventsNumber(eventsNumber) {
    if (eventsNumber > 44)
      this.setState({ ErrorText: 'Number is larger than ' + 44 })
    if (eventsNumber < 22)
      this.setState({ ErrorText: 'Number is smaller than ' + 22 })
    if (eventsNumber > 22 && eventsNumber < 44) this.setState({ ErrorText: '' })
    this.props.updateEvents(undefined, eventsNumber)
  }
  render() {
    const { numberOfEvents } = this.props
    return (
      <div className="NumberOfEvents">
        <ErrorAlert className="error-alert alert" text={this.state.ErrorText} />
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
