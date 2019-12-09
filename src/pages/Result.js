import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import { MainWrapper, ChartContainer } from "../styles/Result";

import {
  parseFile,
  parseResults,
  getMonths,
  isolateDate,
  isolateAmount,
  sortByMonth
} from "../utils/parser";

import Linechart from "../components/Linechart";

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

const CHART_HEIGHT = 300;
const CHART_WIDTH = 700;

// import Barchart from "../components/Barchart";
// import Linechart from "../components/Linechart";
// import Radarchart from "../components/Radarchart";
// import Piechart from "../components/Piechart";
// import Bubblechart from "../components/Bubblechart";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filteredData: [],
      sortedByMonth: {}
    };
  }

  componentDidMount = async () => {
    const { location } = this.props;
    const { files } = location;
    parseFile(files[0], this.parseData);
  };

  parseData = res => {
    const data = parseResults(res);
    const months = getMonths(data);
    const sortedByMonth = sortByMonth(data);
    this.setState({ data, sortedByMonth });
  };

  renderMonthCharts = data => {
    let toRender = [];

    Object.keys(data).map(key => {
      toRender.push(<span>{MONTHS[key - 1]}</span>);
      toRender.push(
        <ChartContainer height={CHART_HEIGHT} width={CHART_WIDTH}>
          <Linechart
            key={key}
            id={key}
            heading={"Transactions"}
            labels={isolateDate(data[key])}
            data={isolateAmount(data[key])}
            height={CHART_HEIGHT}
            width={CHART_WIDTH}
          />
        </ChartContainer>
      );
    });
    return toRender;
  };

  render() {
    const { data, sortedByMonth } = this.state;
    return (
      <MainWrapper>
        <input type="file" name="file" onChange={this.onChangeHandler} />
        {/* <ChartContainer> */}
        {Object.keys(sortedByMonth).length !== 0 &&
          this.renderMonthCharts(sortedByMonth)}
        {/* </ChartContainer> */}
      </MainWrapper>
    );
  }
}

export default withRouter(Result);
