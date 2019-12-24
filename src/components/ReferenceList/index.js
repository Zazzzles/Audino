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

const Row = ({ name, count, amount }) => {
  return (
    <DataRow>
      <RowLabel width={280}>{name}</RowLabel>
      <RowLabel width={60} amount count>
        {count}
      </RowLabel>
      <RowLabel width={80} amount>
        R{amount}
      </RowLabel>
    </DataRow>
  );
};

export default function ReferenceList({ references = [] }) {
  return (
    <Container>
      <TopBar>
        <ColLabel width={300}>Name</ColLabel>
        <ColLabel width={80}>Count</ColLabel>
        <ColLabel width={60}>Amount</ColLabel>
      </TopBar>
      <TransactionsLabel>{references.length} references</TransactionsLabel>
      <RowContainer>
        {references.map((transaction, index) => {
          const { name, count, amount } = transaction;

          return <Row key={index} name={name} count={count} amount={amount} />;
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
