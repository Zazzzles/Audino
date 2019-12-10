import styled from "styled-components";

export const Container = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 15px;
  overflow: hidden;
`;

export const NavItem = styled.div`
  height: 50px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid lightgrey;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s;
  color: ${props => (props.active ? "white" : "#00000080")};
  background-color: ${props => (props.active ? "#609FEB" : "transparent")};
  &:hover {
    color: ${props => !props.active && "#609feb"};
  }
`;
