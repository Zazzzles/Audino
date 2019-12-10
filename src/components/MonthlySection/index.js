import React, { Component } from "react";

import MonthSelector from "../MonthSelector";
import ChartTypeSwitch from "../ChartTypeSwitch";

import Linechart from "../Linechart";

import {
  Container,
  ChartContainer,
  SelectionBar,
  ChartWrapper
} from "./styles";

export default class MonthlySection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartContainerWidth: 0,
      selectedChartType: "line"
    };
    this.chartContainerRef = React.createRef();
  }

  componentDidMount = () => {
    if (this.chartContainerRef) {
      this.setState({
        chartContainerWidth: this.chartContainerRef.clientWidth
      });
    }
  };
  onMonthSelect = month => {
    console.log(`${month} selected`);
  };

  onChartTypeSelect = chart => {
    this.setState({ selectedChartType: chart });
  };

  render() {
    const { chartContainerWidth, selectedChartType } = this.state;
    return (
      <Container>
        <SelectionBar>
          <MonthSelector
            months={["January", "April", "May", "June"]}
            onSelect={this.onMonthSelect}
          />
          <ChartTypeSwitch onSwitch={this.onChartTypeSelect} />
        </SelectionBar>

        <ChartContainer ref={elem => (this.chartContainerRef = elem)}>
          <ChartWrapper height={400} width={chartContainerWidth}>
            {selectedChartType === "line" && (
              <Linechart
                id={"1"}
                heading={"Transactions"}
                labels={["10/20/2010", "10/20/2010", "10/20/2010"]}
                data={[23, 41, 32]}
                height={400}
                width={chartContainerWidth}
              />
            )}
          </ChartWrapper>
        </ChartContainer>
      </Container>
    );
  }
}
