import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const EventGenre = ({ events }) => {
  const [data, setData] = useState([])

  const COLORS = ['#7E697A', '#525252', '#BB7D8C', '#8685EF', '#FFC271']

  useEffect(() => {
    setData(() => {
      const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular JS']
      let data = genres.map((genre) => {
        const value = events.filter((event) =>
          event.summary.split(' ').includes(genre)
        ).length

        return { name: genre, value }
      })
      data = data.filter((data) => data.value)
      return data
    })
  }, [events])

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          labelLine={false}
          innerRadius={50}
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
          outerRadius={90}
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
