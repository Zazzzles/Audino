import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  margin-top: -30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid lightgrey;
  padding-left: 30px;
  padding-right: 30px;
  box-sizing: border-box;
`;

export const Label = styled.span`
  color: #00000087;
  font-weight: 700;
  font-size: 15px;
`;

export const FileItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  height: 28px;
  border-radius: 16px;
  margin-left: 10px;
  font-size: 14px;
  cursor: pointer;
  color: ${props => (props.selected ? "white" : "#00000061")};
  background-color: ${props => (props.selected ? "#609FEB" : "transparent")};
`;
