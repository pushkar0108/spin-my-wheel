import React from "react";
import Grid from '@mui/material/Grid';
import Layout from '../components/Layout';
import WheelComponent from '../components/WheelComponent';
import BasicTabs from '../components/BasicTabs';
import Confetti from '../components/Confetti';
import HowToUse from '../components/HowToUse';
import WhatToUse from '../components/WhatToUse';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      segments: [
        ['better luck next time', true],
        ['won 70', true],
        ['won 10', true],
        ['better luck next time', true],
        ['won 2', true],
        ['won uber pass', true],
        ['better luck next time', true],
        ['won a voucher', true],
      ],
      selectedPalette: 7,
      results: [],
      showConfetti: false
    }
  }
  
  setSegments = (segments) => {
    this.setState({ segments });
  }

  setSelectedPalette = (selectedPalette) => {
    this.setState({ selectedPalette });
  }

  addResult = (result) => {
    this.setState({
      results: [...this.state.results, result],
      showConfetti: true,
    }, () => {
      setTimeout(() => {
        this.setState({
          showConfetti: false,
        });
      }, 10 * 1000);
    });
  }

  render() {
    const {segments, selectedPalette, results, showConfetti} = this.state;
    return (
      <Layout>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6}>
            <WheelComponent
              segments={segments}
              selectedPalette={selectedPalette}
              onFinished={this.addResult}
            />
          </Grid>
          <Grid item xs={10} md={5}>
            <BasicTabs 
              segments={segments}
              setSegments={this.setSegments}
              selectedPalette={selectedPalette}
              setSelectedPalette={this.setSelectedPalette}
              results={results}
            />
          </Grid>
        </Grid>

        <HowToUse />
        <WhatToUse />

        {
          showConfetti &&
          <Confetti />
        }
      </Layout>
    )
  }
}

export default Home;
