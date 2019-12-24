import React from "react";

import {
  Container,
  Header,
  TransactionItem,
  MonthContainer,
  MonthItem
} from "./styles";

import { months } from "../../utils/consts";

export default function RecurringTransactions({ recurring = [] }) {
  return (
    <Container>
      <Header>Recurring transactions</Header>
      {recurring.map(item => {
        return (
          <TransactionItem>
            {item.name}
            <MonthContainer>
              {item.months.map(item => {
                const { month, amount } = item;
                return (
                  <MonthItem>
                    {months[month - 1]} R {amount}
                  </MonthItem>
                );
              })}
            </MonthContainer>
          </TransactionItem>
        );
      })}
    </Container>
  );
}
