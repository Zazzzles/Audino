import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import {
  MainWrapper,
  LogoImage,
  CenterContainer,
  Tagline,
  ContinueButton,
  ButtonText,
  ContinueButtonPlaceholder,
  LoadedFilesContainer,
  Continue
} from "../styles/Landing";

import Dropzone from "../components/Dropzone";

import { getFiles } from "../utils/persistence";

import BG from "../assets/bg.png";
import Logo from "../assets/logo.png";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      loadedFiles: []
    };
  }

  async componentDidMount() {
    let files = await getFiles();
    if (files.length !== 0) {
      this.setState({ loadedFiles: files });
    }
  }

  handleDrop = data => {
    this.setState({
      files: data
    });
  };

  handleView = () => {
    const { history } = this.props;
    history.push({
      pathname: "/dash"
    });
  };

  handleContinue = () => {
    const { history } = this.props;
    const { files } = this.state;
    history.push({
      pathname: "/dash",
      files
    });
  };

  render() {
    const { files, loadedFiles } = this.state;
    return (
      <MainWrapper image={BG}>
        <CenterContainer>
          <LogoImage src={Logo} />
          <Tagline>Personal finance, visualised</Tagline>
          {loadedFiles.length !== 0 && (
            <LoadedFilesContainer>
              You have {loadedFiles.length}
              {loadedFiles.length > 1 ? " files" : " file"} loaded.
              <br />
              Drop new ones or{" "}
              <Continue onClick={this.handleView}>view current files</Continue>
            </LoadedFilesContainer>
          )}

          <Dropzone handleDrop={this.handleDrop} />
          {files.length !== 0 ? (
            <ContinueButton onClick={this.handleContinue}>
              <ButtonText>Continue</ButtonText>
            </ContinueButton>
          ) : (
            <ContinueButtonPlaceholder></ContinueButtonPlaceholder>
          )}
        </CenterContainer>
      </MainWrapper>
    );
  }
}

export default withRouter(Landing);
