import React, { useState } from "react";

import { Container, NavItem } from "./styles";

export default function Navbar({ onClick }) {
  const [activeItem, setActiveItem] = useState("monthly");
  function handleClick(item) {
    setActiveItem(item);
    onClick(item);
  }
  return (
    <Container>
      <NavItem
        active={activeItem === "monthly"}
        onClick={() => handleClick("monthly")}
      >
        MONTHLY
      </NavItem>
      <NavItem active={activeItem === "all"} onClick={() => handleClick("all")}>
        ALL
      </NavItem>
      <NavItem
        active={activeItem === "references"}
        onClick={() => handleClick("references")}
      >
        REFERENCES
      </NavItem>
      <NavItem
        active={activeItem === "calendar"}
        onClick={() => handleClick("calendar")}
        last
      >
        CALENDAR
      </NavItem>
    </Container>
  );
}
