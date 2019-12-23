import React, { Component } from "react";

import MonthSelector from "../MonthSelector";
import ChartTypeSwitch from "../ChartTypeSwitch";

import Linechart from "../charts/Linechart";
import Barchart from "../charts/Barchart";

import {
  Container,
  ChartContainer,
  SelectionBar,
  ChartWrapper
} from "./styles";

import {
  getMonths,
  sortByMonth,
  isolateDate,
  addAmounts,
  isolateAmount,
  isolateTransactionCounts,
  mapToColor
} from "../../utils/methods";

import { months } from "../../utils/consts";

export default class MonthlySection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartContainerWidth: 0,
      selectedChartType: "curve",
      selectedMonth: "",
      availableMonths: [],
      sortedByMonthData: []
    };
    this.chartContainerRef = React.createRef();
    this.linechart = React.createRef();
    this.barChart = React.createRef();
    this.barChartTransactions = React.createRef();
  }

  componentWillReceiveProps = () => {
    this.update();
  };

  componentDidMount = () => {
    this.update();
  };

  update = () => {
    const { transactions } = this.props;
    const transactionMonths = getMonths(transactions);
    const sortedByMonthData = sortByMonth(transactions);
    let availableMonths = transactionMonths.map(month => months[month - 1]);
    if (this.chartContainerRef) {
      this.setState(
        {
          chartContainerWidth: this.chartContainerRef.clientWidth,
          availableMonths,
          selectedMonth: availableMonths[0],
          sortedByMonthData
        },
        () => this.updateCharts()
      );
    }
  };

  onMonthSelect = month => {
    this.setState({ selectedMonth: month }, () => {
      this.updateCharts();
    });
  };

  onChartTypeSelect = chart => {
    this.setState({ selectedChartType: chart }, () => {
      this.updateCharts();
    });
  };

  updateCharts = () => {
    const { selectedMonth, sortedByMonthData } = this.state;
    const monthIndex = months.indexOf(selectedMonth);
    const rawData = addAmounts(sortedByMonthData[monthIndex + 1]);
    const data = isolateAmount(rawData);
    const transactions = isolateTransactionCounts(rawData);
    const labels = isolateDate(rawData);
    this.lineChart &&
      this.lineChart.update &&
      this.lineChart.update({
        datasets: [
          {
            label: "Amount",
            data: data.reverse(),
            backgroundColor: mapToColor("rgba(96, 159, 235, 0.5)", data),
            borderColor: mapToColor("rgba(96, 159, 235, 1)", data)
          }
        ],
        labels: labels.reverse(),
        yAxisToken: "R"
      });
    this.barChart &&
      this.barChart.update &&
      this.barChart.update({
        datasets: [
          {
            label: "Amount",
            data: data.reverse(),
            backgroundColor: mapToColor("rgba(96, 159, 235, 0.5)", data),
            borderColor: mapToColor("rgba(96, 159, 235, 1)", data)
          }
        ],
        labels: labels.reverse(),
        yAxisToken: "R"
      });

    this.barChartTransactions &&
      this.barChartTransactions.update &&
      this.barChartTransactions.update({
        datasets: [
          {
            label: "Transaction counts",
            data: transactions,
            backgroundColor: mapToColor("rgba(255, 61, 135, 0.5)", data),
            borderColor: mapToColor("rgba(255, 61, 135, 1)", data)
          }
        ],
        labels: labels,
        yAxisToken: ""
      });
  };

  render() {
    const {
      chartContainerWidth,
      selectedChartType,
      availableMonths,
      sortedByMonthData
    } = this.state;
    return (
      <Container>
        <SelectionBar>
          {availableMonths.length !== 0 && (
            <MonthSelector
              months={availableMonths}
              onSelect={this.onMonthSelect}
            />
          )}

          <ChartTypeSwitch onSwitch={this.onChartTypeSelect} />
        </SelectionBar>

        <ChartContainer ref={elem => (this.chartContainerRef = elem)}>
          {sortedByMonthData.length !== 0 && (
            <ChartWrapper height={330} width={chartContainerWidth}>
              {selectedChartType === "curve" && (
                <Linechart
                  ref={elem => (this.lineChart = elem)}
                  id={"1"}
                  height={330}
                  width={chartContainerWidth}
                />
              )}
              {selectedChartType === "bar" && (
                <Barchart
                  ref={elem => (this.barChart = elem)}
                  id={"1"}
                  height={330}
                  width={chartContainerWidth}
                />
              )}
            </ChartWrapper>
          )}
        </ChartContainer>
        <br />
        <ChartContainer ref={elem => (this.chartContainerRef = elem)}>
          {sortedByMonthData.length !== 0 && (
            <ChartWrapper height={330} width={chartContainerWidth}>
              <Barchart
                ref={elem => (this.barChartTransactions = elem)}
                id={"2"}
                height={330}
                width={chartContainerWidth}
              />
            </ChartWrapper>
          )}
        </ChartContainer>
      </Container>
    );
  }
}
