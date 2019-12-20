import React, { Component } from "react";
import moment from "moment";
import { Chart } from "chart.js";

export default class BarChart extends Component {
  constructor(props) {
    super(props);
    this.chart = null;
  }

  update = config => {
    const { data, labels, key, reverse = true, yAxisToken = "" } = config;

    this.chart.data.labels = reverse ? labels.reverse() : labels;
    this.chart.data.datasets[0].data = reverse ? data.reverse() : data;
    this.chart.data.datasets[0].label = key;
    this.chart.data.datasets[0].backgroundColor = this.getColors(
      data
    ).backgroundColors;
    this.chart.data.datasets[0].borderColor = this.getColors(data).borderColors;
    this.chart.options.scales.yAxes[0].ticks.callback = function(value) {
      return yAxisToken + value;
    };
    this.chart.update();
  };

  getColors = data => {
    const { lineColor, bgColor } = this.props;
    return data.reduce(
      i => {
        i.backgroundColors.push(bgColor);
        i.borderColors.push(lineColor);
        return i;
      },
      {
        backgroundColors: [],
        borderColors: []
      }
    );
  };

  componentDidMount = () => {
    const { id } = this.props;
    var ctx = document.getElementById(id);

    this.chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [],
        datasets: [
          {
            label: "",
            data: [],
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
