import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgrey;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  border-radius: 15px;
`;

export const TopBar = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const TransactionsLabel = styled.span`
  color: #0000006e;
  margin-top: -10px;
  margin-bottom: 10px;
  font-size: 15px;
`;

export const RowContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
`;

export const ColLabel = styled.span`
  color: #0000006e;
  width: ${props => props.width}px;
`;

export const DataRow = styled.div`
  width: 100%;
  min-height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  border-bottom: 1px solid #00000024;
`;

export const RowLabel = styled.span`
  color: ${props => (props.amount ? "#609FEB" : "black")};
  width: ${props => props.width}px;
  font-size: 13px;
  padding-left: ${props => (props.count ? 40 : 0)}px;
  font-weight: ${props => (props.date || props.amount) && 700};
`;
