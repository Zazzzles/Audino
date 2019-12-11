import React, { useState } from "react";

import { Container, Label, FileItem } from "./styles";
export default function LoadedFiles({ files = [], onSelect }) {
  const [active, setActive] = useState(files[0]);
  function handleClick(file) {
    onSelect(file);
    setActive(file);
  }
  return (
    <Container>
      <Label>Loaded files:</Label>
      {files.map(file => {
        return (
          <FileItem
            onClick={() => handleClick(file)}
            selected={active === file}
          >
            {file}
          </FileItem>
        );
      })}
      {/* <FileItem>savings_2010.csv</FileItem>
      <FileItem selected>savings_2011.csv</FileItem>
      <FileItem>savings_credit_2012.csv</FileItem> */}
    </Container>
  );
}
