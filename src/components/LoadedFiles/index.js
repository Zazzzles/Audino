import React from "react";

import { Container, Label, FileItem } from "./styles";
export default function LoadedFiles({ files }) {
  return (
    <Container>
      <Label>Loaded files:</Label>
      <FileItem>savings_2010.csv</FileItem>
      <FileItem selected>savings_2011.csv</FileItem>
      <FileItem>savings_credit_2012.csv</FileItem>
    </Container>
  );
}
