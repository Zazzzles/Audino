import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-image: url(${props => props.image});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LogoImage = styled.img`
  height: 60px;
`;
