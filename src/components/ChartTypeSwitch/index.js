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
  const [activeType, setActiveType] = useState("curve");
  function handleClick(type) {
    onSwitch(type);
    setActiveType(type);
  }
  return (
    <Container>
      {/* <Icon
        white={PieWhite}
        blue={PieBlue}
        active={activeType === "pie"}
        onClick={() => handleClick("pie")}
      /> */}
      <Icon
        white={BarWhite}
        blue={BarBlue}
        active={activeType === "bar"}
        onClick={() => handleClick("bar")}
      />
      {/* <Icon
        white={LineWhite}
        blue={LineBlue}
        active={activeType === "line"}
        onClick={() => handleClick("line")}
      /> */}
      <Icon
        white={CurveWhite}
        blue={CurveBlue}
        active={activeType === "curve"}
        onClick={() => handleClick("curve")}
      />
    </Container>
  );
}
