import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const data = {
  labels: ['Play Guitar', 'Reading', 'Listening to Metal Music'],
  datasets: [
    {
      data: [150, 200, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderColor: 'rgba(0,0,0,0.5)',
      borderWidth: 0.5,
      hoverBackgroundColor: 'rgba(200,200,200,0.7)',
      hoverBorderColor: 'rgba(100,99,100,1)',
    },
  ],
}

export default class extends React.Component {
  render() {
    return (
      <div>
        <Doughnut data={data} />
      </div>
    )
  }
}
