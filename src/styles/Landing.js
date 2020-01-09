import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-image: url(${props => props.image});
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MobileWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${props => props.image});
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  display: none;
  @media (max-width: 1000px) {
    display: flex;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 300px;
  width: 40vw;
  @media (max-width: 1000px) {
    display: none;
  }
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 250px;
  width: 55vw;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoImage = styled.img`
  height: 100px;
`;

export const Tagline = styled.span`
  color: #be74ed;
  @media (max-width: 1000px) {
    color: white;
  }
`;

export const DropzoneTopbar = styled.div`
  width: 500px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: centerl
  justify-content: space-between;
`;

export const BankContainer = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const BankImage = styled.img`
  height: 60px;
`;

export const LoadedFilesContainer = styled.div`
  text-align: right;
  font-size: 16px;
  color: white;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Continue = styled.span`
  font-weight: 600;
  color: #39b1ee;
  cursor: pointer;
`;

export const ContinueButton = styled.div`
  height: 50px;
  width: 500px;
  margin-top: 20px;
  background-color: white;
  border-radius: 15px;
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

export const MobileOnly = styled.div`
  text-align: center;
  margin-top: 50px;
  color: white;
  display: none;
  width: 80vw;
  @media (max-width: 1000px) {
    display: block;
  }
`;

export const LoadExample = styled.a`
  cursor: pointer;
  color: white;
  width: 500px;
  text-align: right;
  margin-top: 15px;
  text-decoration: none;
`;

export const ExampleText = styled.span`
  font-weight: 600;
  color: #39b1ee;
`;

export const VersionNumber = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 15px;
`;
