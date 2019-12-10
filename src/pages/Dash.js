import React, { Component } from "react";

import { MainWrapper, ContentContainer, NavPanel } from "../styles/Dash";

import Topbar from "../components/Topbar";
import LoadedFiles from "../components/LoadedFiles";
import TransactionList from "../components/TransactionList";
import Navbar from "../components/Navbar";

class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onBack = () => {
    console.log("going back");
  };

  onNavItemClicked = item => {
    console.log(`${item} clicked`);
  };

  render() {
    return (
      <MainWrapper>
        <Topbar onBack={this.onBack} />
        <LoadedFiles />
        <ContentContainer>
          <TransactionList />
          <NavPanel>
            <Navbar activeItem={"monthly"} onClick={this.onNavItemClicked} />
          </NavPanel>
        </ContentContainer>
      </MainWrapper>
    );
  }
}

export default Dash;
