import React, { Component } from "react";

import {
  Container,
  SelectionBar,
  ChartContainer,
  ChartWrapper
} from "./styles";

import Radarchart from "../charts/Radarchart";

import MonthSelector from "../MonthSelector";

import {
  getMonths,
  sortByMonth,
  isolateDate,
  addAmounts,
  isolateAmount,
  isolateTransactionCounts,
  mapToColor,
  isolateReference,
  getReferencesByMonth,
  isolateCount
} from "../../utils/methods";

import { months } from "../../utils/consts";

const CHART_HEIGHT = 650;

export default class CategorySection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartContainerWidth: 0,
      selectedMonth: "",
      availableMonths: []
    };
    this.radarChart = React.createRef();
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
    //const sortedByMonthData = sortByMonth(transactions);
    let availableMonths = transactionMonths.map(month => months[month - 1]);
    if (this.chartContainerRef) {
      this.setState(
        {
          chartContainerWidth: this.chartContainerRef.clientWidth,
          availableMonths,
          selectedMonth: availableMonths[0]
          // sortedByMonthData
        },
        () => this.updateCharts()
      );
    }
  };

  updateCharts = () => {
    //  FIXME: Probably shouldnt be using radar for this type of data
    //  Look into using tables instead
    const { transactions } = this.props;
    const { selectedMonth } = this.state;
    const monthIndex = months.indexOf(selectedMonth) + 1;

    const monthlyData = getReferencesByMonth(transactions);
    const dataForMonth = monthlyData[monthIndex];
    const data = isolateCount(dataForMonth);
    //const transactions = isolateTransactionCounts(rawData);
    const labels = isolateReference(dataForMonth);
    this.radarChart &&
      this.radarChart.update &&
      this.radarChart.update({
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
  };

  onMonthSelect = month => {
    this.setState({ selectedMonth: month }, () => {
      this.updateCharts();
    });
  };

  render() {
    const { transactions } = this.props;
    const { chartContainerWidth, availableMonths } = this.state;
    return (
      <Container>
        <SelectionBar>
          {availableMonths.length !== 0 && (
            <MonthSelector
              months={availableMonths}
              onSelect={this.onMonthSelect}
            />
          )}

          {/* <ChartTypeSwitch onSwitch={this.onChartTypeSelect} /> */}
        </SelectionBar>

        <ChartContainer
          height={CHART_HEIGHT}
          ref={elem => (this.chartContainerRef = elem)}
        >
          {transactions.length !== 0 && (
            <Radarchart
              ref={elem => (this.radarChart = elem)}
              id={"radar"}
              height={CHART_HEIGHT - 700}
              width={chartContainerWidth - 700}
            />
          )}
        </ChartContainer>
      </Container>
    );
  }
}
