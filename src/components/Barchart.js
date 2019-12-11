import React, { Component } from "react";

import { Chart } from "chart.js";

export default class BarChart extends Component {
  constructor(props) {
    super(props);
    this.chart = null;
  }

  update = () => {
    this.chart.update();
  };

  componentDidMount = () => {
    const { heading, labels, data, id } = this.props;
    var ctx = document.getElementById(id);
    const backgroundColors = data.map(item => "#609febad");
    const borderColors = data.map(item => "#609FEB");
    this.chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels.reverse(),
        datasets: [
          {
            label: heading,
            data: data.reverse(),
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  };

  render() {
    const { id, height, width } = this.props;
    return <canvas id={id} width={width} height={height}></canvas>;
  }
}
