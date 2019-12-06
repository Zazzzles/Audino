import React, { Component } from 'react'

import { Chart } from 'chart.js'

export default class Bubblechart extends Component {
  componentDidMount = () => {
    var ctx = document.getElementById('bubbleChart')
    var myChart = new Chart(ctx, {
      type: 'bubble',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [
              {
                x: 5,
                y: 1,
                r: 4,
              },
              {
                x: 1,
                y: 3,
                r: 9,
              },
              {
                x: 2,
                y: 4,
                r: 4,
              },
              {
                x: 1,
                y: 6,
                r: 10,
              },
              {
                x: 7,
                y: 3,
                r: 2,
              },
              {
                x: 4,
                y: 5,
                r: 4,
              },
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    })
  }

  render() {
    return <canvas id="bubbleChart" width="400" height="400"></canvas>
  }
}
