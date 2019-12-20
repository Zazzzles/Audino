import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  width: 500px;
  border: 2px dashed white;
  margin-top: 100px;
  background-color: ${props => (props.droppable ? "#ffffff36;" : "transparent")}
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const FileUpload = styled.input`
  display: none;
`;

export const FileUploadLabel = styled.label`
  position: absolute;
  height: 300px;
  width: 500px;
  cursor: pointer;
`;

export const Label = styled.span`
  color: white;
  font-weight: 700;
  font-size: 20px;
`;

export const FileLabel = styled.span`
  color: white;
  font-weight: 500;
  font-size: 17px;
`;
