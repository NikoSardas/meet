// import React, { Component, PureComponent } from 'react'

// import {
//   PieChart,
//   Pie,
//   Sector,
//   Cell,
//   ScatterChart,
//   Scatter,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from 'recharts'

// getData = () => {
//   const { locations, displayedEvents } = this.state
//   const data = locations.map((location) => {
//     const number = displayedEvents.filter(
//       (event) => event.location === location
//     ).length
//     const city = location.split(', ').shift()
//     return { city, number }
//   })
//   return data
// }

// class Charts extends Component {
//   render() {
//     return (
//       <ResponsiveContainer height={400}>
//         <ScatterChart
//           width={400}
//           height={400}
//           margin={{
//             top: 20,
//             right: 20,
//             bottom: 20,
//             left: 20,
//           }}
//         >
//           <CartesianGrid />
//           <XAxis type="category" dataKey="city" name="city" />
//           <YAxis
//             type="number"
//             dataKey="number"
//             name="number of events"
//             allowDecimals={false}
//           />
//           <Tooltip cursor={{ strokeDasharray: '3 3' }} />
//           <Scatter data={this.getData()} fill="#8884d8" />
//         </ScatterChart>
//       </ResponsiveContainer>
//     )
//   }
// }

// export default Charts
