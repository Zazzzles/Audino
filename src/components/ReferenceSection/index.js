import React, { Component } from "react";

import {
  Container,
  SelectionBar,
  ContentWrapper,
  LeftContainer,
  RightContainer
} from "./styles";

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
  getMonthNumber,
  getReferencesByMonth,
  isolateCount,
  getRecurringReferences
} from "../../utils/methods";

import { months } from "../../utils/consts";

import ReferenceList from "../ReferenceList";
import RecurringTransactions from "../RecurringTransactions";

export default class ReferenceSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMonth: "",
      availableMonths: [],
      referencesForMonth: [],
      recurring: []
    };
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

    this.setState(
      {
        availableMonths,
        selectedMonth: availableMonths[0]
        // sortedByMonthData
      },
      () => this.updateCharts()
    );
  };

  updateCharts = () => {
    // TODO: Refactor to work with new format of RecurringPoints
    const { transactions } = this.props;
    const { selectedMonth } = this.state;
    const monthIndex = months.indexOf(selectedMonth) + 1;
    let formatted = getReferencesByMonth(transactions);
    this.setState({
      referencesForMonth: formatted[monthIndex]
      //  recurring: getRecurringReferences(transactions)
    });
  };

  onMonthSelect = month => {
    this.setState({ selectedMonth: month }, () => {
      this.updateCharts();
    });
  };

  render() {
    const { referencesForMonth, availableMonths, recurring } = this.state;
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

        <ContentWrapper>
          <LeftContainer>
            {referencesForMonth.length !== 0 && (
              <ReferenceList references={referencesForMonth} />
            )}
          </LeftContainer>
          <RightContainer>
            {/* <RecurringTransactions recurring={recurring} /> */}
          </RightContainer>
        </ContentWrapper>
      </Container>
    );
  }
}
