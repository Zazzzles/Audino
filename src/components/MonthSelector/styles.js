import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
`;

export const MonthItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  height: 28px;
  border-radius: 16px;
  margin-left: 10px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s;
  color: ${props => (props.selected ? "white" : "#00000061")};
  background-color: ${props => (props.selected ? "#609FEB" : "transparent")};
`;
