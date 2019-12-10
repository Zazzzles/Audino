import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  transition: all 0.3s;
  background-color: ${props => (props.active ? "#609FEB" : "transparent")};
`;

export const ChartIcon = styled.img`
  height: 20px;
`;
