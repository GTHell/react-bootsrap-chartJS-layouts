import React from 'react'
import { Pie } from 'react-chartjs-2'

const data = {
  datasets: [
    {
      data: [78, 73, 70, 84, 69],
      borderColor: 'rgba(0,0,0,0.5)',
      borderWidth: 0.5,
      hoverBackgroundColor: 'rgba(200,200,200,0.7)',
      hoverBorderColor: 'rgba(100,99,100,1)',
      backgroundColor: ['#3392EE', '#4BC0C0', '#FFCE56', '#FF6384', '#66BBEB'],
      label: 'My dataset', // for legend
    },
  ],
  labels: ['ReactJS', 'VueJS', 'ExpressJS', 'Laravel', 'ASP.NET'],
}

export default class extends React.Component {
  render() {
    return (
      <div>
        <Pie data={data} />
      </div>
    )
  }
}
