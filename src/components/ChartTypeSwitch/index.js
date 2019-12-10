import React, { useState } from "react";

import PieWhite from "../../assets/icons/pie_white.png";
import PieBlue from "../../assets/icons/pie_blue.png";
import BarWhite from "../../assets/icons/bar_white.png";
import BarBlue from "../../assets/icons/bar_blue.png";
import LineWhite from "../../assets/icons/line_white.png";
import LineBlue from "../../assets/icons/line_blue.png";
import CurveWhite from "../../assets/icons/curve_white.png";
import CurveBlue from "../../assets/icons/curve_blue.png";

import { Container, ChartIcon, IconWrapper } from "./styles";

const Icon = ({ white, blue, active = false, onClick }) => {
  return (
    <IconWrapper active={active} onClick={onClick}>
      <ChartIcon src={active ? white : blue} />
    </IconWrapper>
  );
};
export default function ChartTypeSwitch({ onSwitch }) {
  const [activeType, setActiveType] = useState("pie");
  return (
    <Container>
      <Icon
        white={PieWhite}
        blue={PieBlue}
        active={activeType === "pie"}
        onClick={() => {
          onSwitch("pie");
          setActiveType("pie");
        }}
      />
      <Icon
        white={BarWhite}
        blue={BarBlue}
        active={activeType === "bar"}
        onClick={() => {
          onSwitch("bar");
          setActiveType("bar");
        }}
      />
      <Icon
        white={LineWhite}
        blue={LineBlue}
        active={activeType === "line"}
        onClick={() => {
          onSwitch("line");
          setActiveType("line");
        }}
      />
      <Icon
        white={CurveWhite}
        blue={CurveBlue}
        active={activeType === "curve"}
        onClick={() => {
          onSwitch("curve");
          setActiveType("curve");
        }}
      />
    </Container>
  );
}
