import React, { Component } from "react";

import MonthSelector from "../MonthSelector";
import ChartTypeSwitch from "../ChartTypeSwitch";

import Linechart from "../Linechart";
import Barchart from "../Barchart";

import {
  Container,
  ChartContainer,
  SelectionBar,
  ChartWrapper
} from "./styles";

import {
  parseResults,
  getMonths,
  isolateDate,
  isolateAmount,
  sortByMonth
} from "../../utils/parser";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

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
  }

  componentWillReceiveProps = () => {
    console.log("Receive props");
    console.log(this.props);
    this.update();
  };

  componentDidMount = () => {
    this.update();
  };

  update = () => {
    const { transactions } = this.props;
    const months = getMonths(transactions);
    const sortedByMonthData = sortByMonth(transactions);
    let availableMonths = months.map(month => MONTHS[month]);
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
    this.setState({ selectedChartType: chart });
  };

  updateCharts = () => {
    const { selectedMonth, sortedByMonthData } = this.state;
    console.log(sortedByMonthData);
    const monthIndex = MONTHS.indexOf(selectedMonth);
    const labels = isolateDate(sortedByMonthData[monthIndex]);
    const data = isolateAmount(sortedByMonthData[monthIndex]);
    this.lineChart.update && this.lineChart.update(labels, data);
    this.barChart.update && this.barChart.update(labels, data);
  };

  render() {
    const {
      chartContainerWidth,
      selectedChartType,
      availableMonths,
      selectedMonth,
      sortedByMonthData
    } = this.state;
    const monthIndex = MONTHS.indexOf(selectedMonth);
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
            <ChartWrapper height={400} width={chartContainerWidth}>
              {selectedChartType === "curve" && (
                <Linechart
                  ref={elem => (this.lineChart = elem)}
                  id={"1"}
                  heading={"Transactions"}
                  labels={isolateDate(sortedByMonthData[monthIndex])}
                  data={isolateAmount(sortedByMonthData[monthIndex])}
                  height={400}
                  width={chartContainerWidth}
                />
              )}
              {selectedChartType === "bar" && (
                <Barchart
                  ref={elem => (this.barChart = elem)}
                  id={"1"}
                  heading={"Transactions"}
                  labels={isolateDate(sortedByMonthData[monthIndex])}
                  data={isolateAmount(sortedByMonthData[monthIndex])}
                  height={400}
                  width={chartContainerWidth}
                />
              )}
            </ChartWrapper>
          )}
        </ChartContainer>
      </Container>
    );
  }
}
