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
    const colors = data.reduce(
      i => {
        return this.setColors(i);
      },
      {
        backgroundColors: [],
        borderColors: []
      }
    );
    this.chart.data.labels = labels.reverse();
    this.chart.data.datasets[0].data = data.reverse();
    this.chart.data.datasets[0].backgroundColor = colors.backgroundColors;
    this.chart.data.datasets[0].borderColor = colors.borderColors;
    this.chart.update();
  };

  setColors = i => {
    i.backgroundColors.push("#609febad");
    i.borderColors.push("#609FEB");
    return i;
  };

  componentDidMount = () => {
    const { heading, labels, data, id } = this.props;
    var ctx = document.getElementById(id);

    this.chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels.reverse(),
        datasets: [
          {
            label: heading,
            data: data.reverse(),
            backgroundColor: [],
            borderColor: [],
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
