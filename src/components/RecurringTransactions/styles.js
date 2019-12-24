import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin-left: 20px;
`;

export const Header = styled.div`
  width: 100%;
  font-size: 20px;
  margin-bottom: 15px;
`;

export const TransactionItem = styled.div`
  width: 100%;
  border: 1px solid lightgrey;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 15px;
`;

export const MonthContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

export const MonthItem = styled.div`
  font-size: 10px;
  margin-right: 10px;
  background-color: #609feb;
  color: white;
  border-radius: 10px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 10px;
  padding-right: 10px;
`;
