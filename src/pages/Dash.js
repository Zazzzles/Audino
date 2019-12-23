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
import AllSection from "../components/AllSection";
import CategorySection from "../components/CategorySection";
//Utils
import { parseFiles } from "../utils/parser";
import { getFiles } from "../utils/persistence";

class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      workingFile: {},
      selectedNav: "monthly"
    };
  }

  componentDidMount = async () => {
    const { location } = this.props;
    const { files } = location;
    let data = [];
    if (!files) {
      data = getFiles();
    } else {
      data = await parseFiles(files);
    }
    this.setState({ files: data, workingFile: data[0] });
  };

  onBack = () => {
    const { history } = this.props;
    history.push({
      pathname: "/"
    });
  };

  onNavItemClicked = selectedNav => {
    this.setState({ selectedNav });
  };

  onFileSelected = file => {
    const { files } = this.state;
    const workingFile = files.filter(f => f.name === file)[0];
    this.setState({ workingFile }, () => this.setState({ workingFile }));
  };

  render() {
    const { files, workingFile, selectedNav } = this.state;
    return (
      <MainWrapper>
        <Topbar onBack={this.onBack} />
        {files.length !== 0 && (
          <LoadedFiles
            files={files.map(file => file.name)}
            onSelect={this.onFileSelected}
          />
        )}

        {workingFile.transactions && (
          <ContentContainer>
            <TransactionList transactions={workingFile.transactions} />
            <NavPanel>
              <Navbar onClick={this.onNavItemClicked} />
              {selectedNav === "monthly" && (
                <MonthlySection transactions={workingFile.transactions} />
              )}
              {selectedNav === "all" && (
                <AllSection transactions={workingFile.transactions} />
              )}
              {selectedNav === "categories" && (
                <CategorySection transactions={workingFile.transactions} />
              )}
            </NavPanel>
          </ContentContainer>
        )}
      </MainWrapper>
    );
  }
}

export default withRouter(Dash);
