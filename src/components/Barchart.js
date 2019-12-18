import React, { Component } from "react";
import moment from "moment";
import { Chart } from "chart.js";

export default class BarChart extends Component {
  constructor(props) {
    super(props);
    this.chart = null;
  }

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   this.chart.data.labels = nextProps.labels.reverse();
  //   this.chart.data.datasets[0].data = nextProps.data.reverse();
  //   this.chart.update();
  //   return true;
  // };

  update = (labels, data) => {
    this.chart.data.labels = labels.reverse();
    this.chart.data.datasets[0].data = data.reverse();
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
                beginAtZero: true,
                callback: function(value, index, values) {
                  return "R" + value;
                }
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                callback: function(value, index, values) {
                  return moment(value).format("DD");
                }
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
