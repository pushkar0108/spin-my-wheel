import React from "react";
import Grid from '@mui/material/Grid';
import Layout from '../components/Layout';
import WheelComponent from '../components/WheelComponent';
import BasicTabs from '../components/BasicTabs';
import Confetti from '../components/Confetti';
import HowToUse from '../components/HowToUse';
import WhatToUse from '../components/WhatToUse';
import { DEFAULT_SEGMENTS } from '../config/constants';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      segments: DEFAULT_SEGMENTS,
      selectedPalette: 0,
      showConfetti: false,
      results: [],

      spinningSpeed: 300,
      spinningSound: '',
      winningSound: '',
    }
  }

  setAppState = (state) => {
    this.setState(state);
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
    const {segments, spinningSpeed, selectedPalette, results, showConfetti} = this.state;
    return (
      <Layout>
        <Grid container spacing={2} justifyContent="space-around" alignItems="flex-start">
          <Grid item xs={12} md={5}>
            <WheelComponent
              segments={segments}
              selectedPalette={selectedPalette}
              spinningSpeed={spinningSpeed}
              onFinished={this.addResult}
            />
          </Grid>
          <Grid item xs={10} md={5}>
            <BasicTabs 
              spinningSpeed={spinningSpeed}
              segments={segments}
              setAppState={this.setAppState}
              selectedPalette={selectedPalette}
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
