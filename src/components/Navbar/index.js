import React from "react";

import { Container, NavItem } from "./styles";

export default function Navbar({ activeItem, onClick }) {
  return (
    <Container>
      <NavItem
        active={activeItem === "monthly"}
        onClick={() => onClick("monthly")}
      >
        MONTHLY
      </NavItem>
      <NavItem active={activeItem === "all"} onClick={() => onClick("all")}>
        ALL
      </NavItem>
      <NavItem
        active={activeItem === "categories"}
        onClick={() => onClick("categories")}
      >
        CATEGORIES
      </NavItem>
      <NavItem
        active={activeItem === "calendar"}
        onClick={() => onClick("calendar")}
      >
        CALENDAR
      </NavItem>
    </Container>
  );
}
