import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const EventGenre = ({ events }) => {
  const [data, setData] = useState([])

  const COLORS = ['#7E697A', '#525252', '#BB7D8C', '#8685EF', '#b58950']

  useEffect(() => {
    setData(() => {
      const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular']
      let data = genres.map((genre) => {
        const value = events.filter((event) =>
          event.summary.includes(genre)
        ).length
        return { name: genre, value }
      })
      data = data.filter((data) => data.value)
      return data
    })
  }, [events])

  return (
    <ResponsiveContainer height={300}>
      <PieChart>
        <Legend verticalAlign="bottom" height={36} />
        <Pie
          cx="50%"
          cy="50%"
          data={data}
          labelLine={false}
          outerRadius={100}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default EventGenre
