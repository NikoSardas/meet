import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
    }
    handleItemClicked = (suggestion) => {
        const { updateEvents } = this.props
        this.setState({
            query: suggestion,
        })
        updateEvents(suggestion, undefined)
    }
    render() {
        const { locations } = this.props
        return (
            <div className="CitySearch">
                <Dropdown>
                    <Dropdown.Toggle variant="outline-secondary">
                        Filter by city
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="suggestions">
                        <Dropdown.Item
                            onClick={() => this.handleItemClicked('all')}
                        >
                            See all cities
                        </Dropdown.Item>
                        {locations.map((location) => (
                            <Dropdown.Item
                                className="city"
                                value={location}
                                key={location}
                                onClick={() => this.handleItemClicked(location)}
                            >
                                {location}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}
export default CitySearch
