import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import {
  MainWrapper,
  LogoImage,
  CenterContainer,
  Tagline,
  ContinueButton,
  ButtonText,
  ContinueButtonPlaceholder
} from "../styles/Landing";

import Dropzone from "../components/Dropzone";

import BG from "../assets/bg.png";
import Logo from "../assets/logo.png";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }

  handleDrop = data => {
    console.log(data);
    this.setState({
      files: data
    });
  };

  handleContinue = () => {
    const { history } = this.props;
    const { files } = this.state;
    history.push({
      pathname: "/result",
      files
    });
  };

  render() {
    const { files } = this.state;
    return (
      <MainWrapper image={BG}>
        <CenterContainer>
          <LogoImage src={Logo} />
          <Tagline>Personal finance, visualised</Tagline>
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
