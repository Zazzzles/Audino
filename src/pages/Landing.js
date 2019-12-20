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
  Continue,
  MobileOnly,
  LoadExample,
  BankContainer,
  BankImage
} from "../styles/Landing";

import Fnb from "../assets/banks/fnb.png";
import Nedbank from "../assets/banks/nedbank.png";

import Example from "../assets/example.csv";

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
    if (files && files.length !== 0) {
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
          <BankContainer>
            <BankImage src={Fnb} />
            <BankImage src={Nedbank} />
          </BankContainer>

          <LogoImage src={Logo} />
          <Tagline>Personal finance, visualised</Tagline>

          <MobileOnly>
            Currently we don't support mobile browsers. Sorry about that! Use a
            desktop browser instead!
          </MobileOnly>

          {loadedFiles.length !== 0 && (
            <LoadedFilesContainer>
              You have {loadedFiles.length}
              {loadedFiles.length > 1 ? " files" : " file"} loaded.
              <br />
              Drop new ones or{" "}
              <Continue onClick={this.handleView}>view current files</Continue>
            </LoadedFilesContainer>
          )}

          <LoadExample href={Example} download>
            Load an example
          </LoadExample>

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
