import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #eff3f9;
`;

export const ChartContainer = styled.div`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`;
