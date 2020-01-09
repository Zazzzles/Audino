import styled from "styled-components";

export const Container = styled.div`
  min-height: 30px;
  width: 424px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 15px;
  border: 1px solid lightgrey;
  overflow: hidden;
`;

export const NavItem = styled.div`
  height: 30px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: ${props => !props.last && " 1px solid lightgrey"};
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s;
  color: ${props => (props.active ? "white" : "#00000080")};
  background-color: ${props => (props.active ? "#609FEB" : "transparent")};
  &:hover {
    color: ${props => !props.active && "#609feb"};
  }
`;
