import React, { Component } from "react";

import {
  Container,
  SelectionBar,
  ChartContainer,
  ChartWrapper
} from "./styles";

import ChartTypeSwitch from "../ChartTypeSwitch";
import Linechart from "../charts/Linechart";
import Barchart from "../charts/Barchart";

import { isolateDate, isolateAmount, addAmounts } from "../../utils/methods";

const CHART_HEIGHT = 600;
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
    const formatted = addAmounts(transactions);
    const data = isolateAmount(formatted);
    const labels = isolateDate(formatted);
    this.lineChart &&
      this.lineChart.update &&
      this.lineChart.update({
        data,
        labels,
        key: "Amount",
        reverse: true,
        yAxisToken: "R"
      });
    this.barChart &&
      this.barChart.update &&
      this.barChart.update({
        data,
        labels,
        key: "Amount",
        reverse: true,
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
                  lineColor={"rgba(96, 159, 235, 1)"}
                  bgColor={"rgba(96, 159, 235, 0.5)"}
                  width={chartContainerWidth}
                />
              )}
              {selectedChartType === "bar" && (
                <Barchart
                  ref={elem => (this.barChart = elem)}
                  id={"1"}
                  height={CHART_HEIGHT}
                  lineColor={"rgba(96, 159, 235, 1)"}
                  bgColor={"rgba(96, 159, 235, 0.5)"}
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
