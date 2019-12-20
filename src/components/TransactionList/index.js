import React from "react";

import {
  Container,
  TopBar,
  ColLabel,
  DataRow,
  RowLabel,
  RowContainer,
  TransactionsLabel
} from "./styles";

const Row = ({ date, reference, amount }) => {
  return (
    <DataRow>
      <RowLabel width={100} date>
        {date}
      </RowLabel>
      <RowLabel width={240}>{reference}</RowLabel>
      <RowLabel width={60} amount>
        R{amount}
      </RowLabel>
    </DataRow>
  );
};

export default function TransactionList({ transactions = [] }) {
  return (
    <Container>
      <TopBar>
        <ColLabel width={100}>Date</ColLabel>
        <ColLabel width={240}>Reference</ColLabel>
        <ColLabel width={60}>Amount</ColLabel>
      </TopBar>
      <TransactionsLabel>{transactions.length} transactions</TransactionsLabel>
      <RowContainer>
        {transactions.map((transaction, index) => {
          const { date, ref, amount } = transaction;

          return (
            <Row key={index} date={date} reference={ref} amount={amount} />
          );
        })}
        {/* <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        /> */}
      </RowContainer>
    </Container>
  );
}
