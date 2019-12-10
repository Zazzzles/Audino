import React, { useState } from "react";

import { Container, MonthItem } from "./styles";

export default function MonthSelector({ months, onSelect }) {
  const [activeMonth, setActiveMonth] = useState(months[0]);
  return (
    <Container>
      {months.map((month, index) => {
        return (
          <MonthItem
            key={index}
            selected={activeMonth === month}
            onClick={() => {
              setActiveMonth(month);
              onSelect(month);
            }}
          >
            {month}
          </MonthItem>
        );
      })}
    </Container>
  );
}
