import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import { MainWrapper, LogoImage, CenterContainer } from "../styles/Landing";

import Dropzone from "../components/Dropzone";

import BG from "../assets/bg.png";
import Logo from "../assets/logo.png";

class Landing extends Component {
  onChangeHandler = event => {
    const { history } = this.props;
    const file = event.target.files[0];
    history.push({
      pathname: "/result",
      file
    });
  };

  handleDrop = data => {
    console.log(data);
  };

  render() {
    return (
      <MainWrapper image={BG}>
        <CenterContainer>
          <LogoImage src={Logo} />
          <Dropzone handleDrop={this.handleDrop} />
        </CenterContainer>
      </MainWrapper>
    );
  }
}

export default withRouter(Landing);
