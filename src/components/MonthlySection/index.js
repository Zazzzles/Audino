import React, { Component } from "react";

import { Container, ChartContainer, SelectionBar } from "./styles";

import MonthSelector from "../MonthSelector";
import ChartTypeSwitch from "../ChartTypeSwitch";

export default class MonthlySection extends Component {
  onMonthSelect = month => {
    console.log(`${month} selected`);
  };

  onChartTypeSelect = chart => {
    console.log(`${chart} selected`);
  };

  render() {
    return (
      <Container>
        <SelectionBar>
          <MonthSelector
            months={["January", "April", "May", "June"]}
            onSelect={this.onMonthSelect}
          />
          <ChartTypeSwitch onSwitch={this.onChartTypeSelect} />
        </SelectionBar>

        <ChartContainer></ChartContainer>
      </Container>
    );
  }
}
