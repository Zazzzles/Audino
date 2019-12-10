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
      <RowLabel width={260}>{reference}</RowLabel>
      <RowLabel width={40} amount>
        R{amount}
      </RowLabel>
    </DataRow>
  );
};

export default function TransactionList() {
  return (
    <Container>
      <TopBar>
        <ColLabel width={100}>Date</ColLabel>
        <ColLabel width={240}>Reference</ColLabel>
        <ColLabel width={50}>Amount</ColLabel>
      </TopBar>
      <TransactionsLabel>30 transactions</TransactionsLabel>
      <RowContainer>
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
        <Row
          date={"2010/01/04"}
          reference={"Checkers de grendel"}
          amount={430}
        />
      </RowContainer>
    </Container>
  );
}
