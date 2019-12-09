import React, { Component } from "react";

import {
  Container,
  Label,
  FileLabel,
  FileUpload,
  FileUploadLabel
} from "./styles";

export default class Dropzone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragOver: false,
      droppedFiles: []
    };
    this.dropRef = React.createRef();
  }

  componentDidMount() {
    let div = this.dropRef.current;
    div.addEventListener("dragenter", this.handleDragIn);
    div.addEventListener("dragleave", this.handleDragOut);
    div.addEventListener("dragover", this.handleDrag);
    div.addEventListener("drop", this.handleDrop);
  }

  handleDragIn = e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({
        dragOver: true
      });
    }
  };

  handleDragOut = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      dragOver: false
    });
  };

  handleDrag = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Drag");
  };

  handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      dragOver: false
    });

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      let files = Array.from(e.dataTransfer.files);
      this.props.handleDrop(files);
      this.setState({
        droppedFiles: files
      });
      e.dataTransfer.clearData();
    }
  };

  componentWillUnmount() {
    let div = this.dropRef.current;
    div.removeEventListener("dragenter", this.handleDragIn);
    div.removeEventListener("dragleave", this.handleDragOut);
    div.removeEventListener("dragover", this.handleDrag);
    div.removeEventListener("drop", this.handleDrop);
  }

  render() {
    const { dragOver, droppedFiles } = this.state;
    return (
      <Container ref={this.dropRef} droppable={dragOver}>
        <FileUploadLabel>
          <FileUpload type={"file"} />
        </FileUploadLabel>

        {droppedFiles.length === 0 ? (
          <Label>Drop files here</Label>
        ) : (
          droppedFiles.map((file, index) => {
            return <FileLabel key={index}>{file.name}</FileLabel>;
          })
        )}
      </Container>
    );
  }
}
