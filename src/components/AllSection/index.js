import React, { Component } from "react";

import {
  Container,
  SelectionBar,
  ChartContainer,
  ChartWrapper,
  DataWrapper
} from "./styles";

import ChartTypeSwitch from "../ChartTypeSwitch";
import Linechart from "../charts/Linechart";
import Barchart from "../charts/Barchart";
import TransactionList from "../TransactionList";

import {
  isolateDate,
  isolateAmount,
  addAmounts,
  sortByMonth,
  mapToColor
} from "../../utils/methods";

import { monthColors } from "../../utils/consts";

const CHART_HEIGHT = 650;
export default class AllSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartContainerWidth: 0,
      selectedChartType: "curve",
      transactions: []
    };
    this.chartContainerRef = React.createRef();
  }

  componentDidMount = () => {
    this.update();
  };

  update = () => {
    const { transactions } = this.props;
    if (this.chartContainerRef) {
      this.setState(
        {
          chartContainerWidth: this.chartContainerRef.clientWidth,
          transactions
        },
        () => this.updateCharts()
      );
    }
  };

  updateCharts = () => {
    const { transactions } = this.state;

    //  Sorting colors by month for bargraph only
    const sortedByMonth = sortByMonth(transactions);
    let backgroundColor = [];
    let borderColor = [];

    Object.keys(sortedByMonth).forEach(key => {
      let transactions = sortedByMonth[key];
      addAmounts(transactions).forEach(_ => {
        backgroundColor.push(monthColors[key].backgroundColor);
        borderColor.push(monthColors[key].borderColor);
      });
    });

    const formatted = addAmounts(transactions);
    const data = isolateAmount(formatted);
    const labels = isolateDate(formatted);

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
            backgroundColor,
            borderColor
          }
        ],
        labels: labels.reverse(),
        yAxisToken: "R"
      });
  };

  onChartTypeSelect = chart => {
    this.setState({ selectedChartType: chart }, () => {
      this.updateCharts();
    });
  };

  render() {
    const { selectedChartType, chartContainerWidth, transactions } = this.state;
    return (
      <Container>
        <TransactionList transactions={transactions} />
        <DataWrapper>
          <SelectionBar>
            <ChartTypeSwitch onSwitch={this.onChartTypeSelect} />
          </SelectionBar>

          <ChartContainer
            height={CHART_HEIGHT}
            ref={elem => (this.chartContainerRef = elem)}
          >
            {transactions.length !== 0 && (
              <ChartWrapper height={CHART_HEIGHT} width={chartContainerWidth}>
                {selectedChartType === "curve" && (
                  <Linechart
                    ref={elem => (this.lineChart = elem)}
                    id={"1"}
                    height={CHART_HEIGHT}
                    width={chartContainerWidth}
                  />
                )}
                {selectedChartType === "bar" && (
                  <Barchart
                    ref={elem => (this.barChart = elem)}
                    id={"1"}
                    height={CHART_HEIGHT}
                    width={chartContainerWidth}
                  />
                )}
              </ChartWrapper>
            )}
          </ChartContainer>
        </DataWrapper>
      </Container>
    );
  }
}
