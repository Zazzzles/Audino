import React, { Component } from "react";
import moment from "moment";
import { Chart } from "chart.js";

import { addAmounts, isolateAmount, isolateDate } from "../utils/methods";

export default class BarChart extends Component {
  constructor(props) {
    super(props);
    this.chart = null;
  }

  update = data => {
    const formattedData = addAmounts(data.reverse());
    this.chart.data.labels = isolateDate(formattedData);
    this.chart.data.datasets[0].data = isolateAmount(formattedData);
    this.chart.data.datasets[0].backgroundColor = this.getColors(
      data
    ).backgroundColors;
    this.chart.data.datasets[0].borderColor = this.getColors(data).borderColors;
    this.chart.update();
  };

  getColors = data => {
    return data.reduce(
      i => {
        i.backgroundColors.push("rgba(96, 159, 235, 0.5)");
        i.borderColors.push("rgba(96, 159, 235, 1)");
        return i;
      },
      {
        backgroundColors: [],
        borderColors: []
      }
    );
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
