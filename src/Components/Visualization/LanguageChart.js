import React from 'react'
import { HorizontalBar } from 'react-chartjs-2'

const data = {
  labels: ['Javascript', 'Python', 'PHP', 'C#', 'Java', 'C++'],
  datasets: [
    {
      label: 'Language Level',
      backgroundColor: [
        '#f1e05a',
        '#3572A5',
        '#4F5D95',
        '#178600',
        '#b07219',
        '#f34b7d',
      ],
      borderColor: 'rgba(0,0,0,0.5)',
      borderWidth: 0.5,
      hoverBackgroundColor: 'rgba(200,200,200,0.7)',
      hoverBorderColor: 'rgba(100,99,100,1)',
      data: [90, 84, 80, 86, 82, 60],
    },
  ],
}

const options = {
  scales: {
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
          max: 100,
          min: 0,
        },
      },
    ],
  },
}

export default class extends React.Component {
  render() {
    return (
      <div>
        <HorizontalBar data={data} options={options} />
      </div>
    )
  }
}
