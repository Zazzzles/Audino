import React, { Component } from "react";

import { MainWrapper, ContentContainer, NavPanel } from "../styles/Dash";
import { withRouter } from "react-router-dom";

//Components
import Topbar from "../components/Topbar";
import LoadedFiles from "../components/LoadedFiles";
import TransactionList from "../components/TransactionList";
import Navbar from "../components/Navbar";
//Sections
import MonthlySection from "../components/MonthlySection";
//Utils
import {
  parseFile,
  parseResults,
  getMonths,
  isolateDate,
  isolateAmount,
  sortByMonth
} from "../utils/parser";

class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    const { location } = this.props;
    const { files } = location;
    console.log(files);
    //parseFile(files[0], this.parseData);
  };

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
            <Navbar onClick={this.onNavItemClicked} />
            <MonthlySection />
          </NavPanel>
        </ContentContainer>
      </MainWrapper>
    );
  }
}

export default withRouter(Dash);
