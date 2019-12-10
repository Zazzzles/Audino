import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(
    83deg,
    rgba(18, 194, 233, 1) 0%,
    rgba(196, 113, 237, 1) 46%,
    rgba(246, 79, 89, 1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 30px;
`;

export const BottomMask = styled.div`
  height: 30px;
  width: 100%;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  background-color: white;
`;

export const LogoImage = styled.img`
  height: 40px;
`;

export const BackImage = styled.img`
  height: 30px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    height: 35px;
  }
`;
