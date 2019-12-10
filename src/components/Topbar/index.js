import React from "react";

import Logo from "../../assets/logo.png";
import Back from "../../assets/icons/back.png";
import {
  Container,
  ContentContainer,
  LogoImage,
  BottomMask,
  BackImage
} from "./styles";

export default function Topbar({ onBack }) {
  return (
    <Container>
      <ContentContainer>
        <LogoImage src={Logo} />
        <BackImage src={Back} onClick={onBack} />
      </ContentContainer>
      <BottomMask />
    </Container>
  );
}
