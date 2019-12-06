import React, { Component } from 'react'

import { MainWrapper, ChartContainer } from '../styles/Result'

import Barchart from '../components/Barchart'
import Linechart from '../components/Linechart'
import Radarchart from '../components/Radarchart'
import Piechart from '../components/Piechart'
import Bubblechart from '../components/Bubblechart'

class Result extends Component {
  componentDidMount = async () => {}
  render() {
    return (
      <MainWrapper>
        <ChartContainer>
          <Barchart />
          <Linechart />
          <Radarchart />
        </ChartContainer>

        <ChartContainer>
          <Linechart />
        </ChartContainer>

        <ChartContainer>
          <Radarchart />
        </ChartContainer>

        <ChartContainer>
          <Piechart />
        </ChartContainer>

        <ChartContainer>
          <Bubblechart />
        </ChartContainer>
      </MainWrapper>
    )
  }
}

export default Result
