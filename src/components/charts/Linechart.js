import React, { Component } from "react";
import moment from "moment";
import { Chart } from "chart.js";

export default class Linechart extends Component {
  constructor(props) {
    super(props);
    this.chart = null;
  }

  update = config => {
    const { labels, datasets, yAxisToken = "" } = config;
    let formattedDatasets = datasets.map(dataItem => {
      const { label, data, backgroundColor, borderColor } = dataItem;
      return {
        label,
        data,
        backgroundColor,
        borderColor
      };
    });
    this.chart.data.labels = labels;
    this.chart.data.datasets = formattedDatasets;
    this.chart.options.scales.yAxes[0].ticks.callback = function(value) {
      return yAxisToken + value;
    };
    this.chart.update();
  };

  generateColors = (color, data) => {
    return data.map(_ => color);
  };

  componentDidMount = () => {
    const { id } = this.props;
    var ctx = document.getElementById(id);

    this.chart = new Chart(ctx, {
      type: "line",
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
