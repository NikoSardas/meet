import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
    }
    handleInputChanged = (event) => {
        const { locations } = this.props
        const value = event.target.value
        const suggestions = locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1
        })
        this.setState({
            query: value,
            suggestions,
        })
    }
    handleItemClicked = (suggestion) => {
        const { updateEvents } = this.props
        this.setState({
            query: suggestion,
        })
        updateEvents(suggestion, undefined)
    }
    render() {
        const { query, suggestions } = this.state
        return (
            <div className="CitySearch">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Filter by city</Form.Label>
                        <Form.Control
                            type="text"
                            className="city"
                            value={query}
                            onChange={this.handleInputChanged}
                            placeholder="Enter city name"
                        />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                </Form>
                {/* <p className="input-field-title">Filter by city:</p>
                <input
                    type="text"
                    className="city"
                    value={query}
                    onChange={this.handleInputChanged}
                /> */}
                <ul className="suggestions">
                    {suggestions.map((suggestion) => (
                        <li
                            key={suggestion}
                            onClick={() => this.handleItemClicked(suggestion)}
                        >
                            {suggestion}
                        </li>
                    ))}
                    <li onClick={() => this.handleItemClicked('all')}>
                        <b>See all cities</b>
                    </li>
                </ul>
            </div>
        )
    }
}
export default CitySearch
