import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import {
  MainWrapper,
  LogoContainer,
  LogoImage,
  Tagline,
  DropzoneTopbar,
  ContinueButton,
  ButtonText,
  ContinueButtonPlaceholder,
  LoadedFilesContainer,
  Continue,
  MobileOnly,
  LoadExample,
  BankContainer,
  BankImage,
  LeftContainer,
  RightContainer,
  MobileWrapper,
  ExampleText,
  VersionNumber
} from "../styles/Landing";

import Fnb from "../assets/banks/fnb.png";
import Nedbank from "../assets/banks/nedbank.png";

import Example from "../assets/example.csv";

import Dropzone from "../components/Dropzone";

import { getFiles } from "../utils/persistence";

import BG from "../assets/landing.jpg";
import BGmobile from "../assets/bg.png";
import Logo from "../assets/logo_grad.png";
import LogoWhite from "../assets/logo.png";

const APP_VERSION = "1.0.1";
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
        <VersionNumber>{APP_VERSION}</VersionNumber>
        <MobileWrapper image={BGmobile}>
          <LogoContainer>
            <LogoImage src={LogoWhite} />
            <Tagline>Personal finance, visualised</Tagline>
          </LogoContainer>
          <MobileOnly>
            Currently we don't support mobile browsers. Sorry about that! <br />{" "}
            Use a desktop browser instead!
          </MobileOnly>
        </MobileWrapper>

        <LeftContainer>
          <LogoContainer>
            <LogoImage src={Logo} />
            <Tagline>Personal finance, visualised</Tagline>
          </LogoContainer>
        </LeftContainer>
        <RightContainer>
          <DropzoneTopbar>
            <BankContainer>
              <BankImage src={Fnb} />
              <BankImage src={Nedbank} />
            </BankContainer>

            {loadedFiles.length !== 0 && (
              <LoadedFilesContainer>
                You have {loadedFiles.length}
                {loadedFiles.length > 1 ? " files" : " file"} loaded.
                <br />
                Drop new ones or{" "}
                <Continue onClick={this.handleView}>
                  view current files
                </Continue>
              </LoadedFilesContainer>
            )}
          </DropzoneTopbar>
          <Dropzone handleDrop={this.handleDrop} />
          <LoadExample href={Example} download>
            Don't have a file? <ExampleText>Load an example</ExampleText>
          </LoadExample>

          {files.length !== 0 ? (
            <ContinueButton onClick={this.handleContinue}>
              <ButtonText>Continue</ButtonText>
            </ContinueButton>
          ) : (
            <ContinueButtonPlaceholder></ContinueButtonPlaceholder>
          )}
        </RightContainer>
      </MainWrapper>
    );
  }
}

export default withRouter(Landing);
