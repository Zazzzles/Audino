import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-image: url(${props => props.image});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LogoImage = styled.img`
  height: 60px;
`;

export const Tagline = styled.span`
  color: white;
`;

export const ContinueButton = styled.div`
  height: 50px;
  width: 300px;
  background-color: white;
  border-radius: 15px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ContinueButtonPlaceholder = styled.div`
  height: 50px;
  width: 300px;
`;

export const ButtonText = styled.span`
  color: #c471ed;
  font-size: 20px;
  font-weight: 800;
`;

export const LoadedFilesContainer = styled.div`
  font-weight: 600;
  text-align: center;
  margin-top: 50px;
  color: white;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Continue = styled.span`
  font-weight: 600;
  color: #8dccf2;
  cursor: pointer;
`;

export const MobileOnly = styled.div`
  font-weight: 600;
  text-align: center;
  margin-top: 50px;
  color: white;
  display: none;
  width: 80vw;
  @media (max-width: 1000px) {
    display: block;
  }
`;
