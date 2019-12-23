import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  padding: 1px;
`;

export const SelectionBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
`;

export const ChartContainer = styled.div`
  height: ${props => props.height}px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 15px;
`;

export const ChartWrapper = styled.div`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`;
