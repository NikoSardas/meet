import React, { PureComponent } from 'react'

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

class Chart extends PureComponent {
  getData = () => {
    const { locations, displayedEvents } = this.props
    const data = locations.map((location) => {
      const number = displayedEvents.filter(
        (event) => event.location === location
      ).length
      let city = location.split(', ').shift()
      city = city.charAt(0).toUpperCase() + city.slice(1)
      return { city, number }
    })
    return data
  }

  render() {
    return (
      <ResponsiveContainer className="mt-4" height={1000} width="100%">
        <ScatterChart margin={{ left: 30, right: 30 }}>
          <CartesianGrid />
          <YAxis type="category" dataKey="city" name="city" />
          <XAxis
            type="number"
            dataKey="number"
            name="number of events"
            allowDecimals={false}
          />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={this.getData()} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    )
  }
}

export default Chart
