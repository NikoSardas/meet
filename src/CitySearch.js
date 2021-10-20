import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

class CitySearch extends Component {
    state = {
        displayedSelection: '',
    }

    handleItemClicked = (location) => {
        const { updateEvents } = this.props
        this.setState({ displayedSelection: location })
        updateEvents(location, undefined)
    }
    render() {
        const { locations } = this.props
        const { displayedSelection } = this.state

        return (
            <div className="CitySearch mt-3 mb-3">
                <Dropdown>
                    <Dropdown.Toggle
                        variant="outline-secondary"
                        id="dropdown-basic"
                    >
                        Filter by city
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="suggestions">
                        <Dropdown.Item
                            className="all-cities"
                            onClick={() => this.handleItemClicked('See all cities')}
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
                <p>{displayedSelection}</p>
            </div>
        )
    }
}
export default CitySearch
