import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Layout from '../components/Layout';
import WheelComponent from '../components/WheelComponent';
import BasicTabs from '../components/BasicTabs';
import Confetti from '../components/Confetti';
import HowToUse from '../components/HowToUse';
import WhatToUse from '../components/WhatToUse';
import Prompt from '../components/Prompt';

import { DEFAULT_SEGMENTS } from '../config/constants';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      segments: DEFAULT_SEGMENTS,
      itemBackgroundColors: null,
      selectedPalette: 0,
      showConfetti: false,
      results: [],

      spinningSpeed: 300,
      spinningSound: '',
      winningSound: '',
      isLoading: false,
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

  handleGenAIResponse = (config) => {
    this.setState({
      segments: config.items.map(item => {
        return [item.label, true]
      }),
      itemBackgroundColors: config.itemBackgroundColors,
    });
  }

  render() {
    const {segments, itemBackgroundColors, spinningSpeed, selectedPalette, results, showConfetti, isLoading} = this.state;
    return (
      <Layout>
        <Grid container spacing={2} justifyContent="space-around" alignItems="flex-start">
          <Grid item xs={12} md={5}>
            {
              isLoading ?
              <Box className="margin-auto wheel-container"
                sx={{
                  height: "100%",
                  padding: "10px",
                  paddingTop: "20px"
                }}>
                  <Skeleton 
                    variant="circular" 
                    width={400} 
                    height={400} 
                    animation="wave" />
              </Box>
              :
              <WheelComponent
                segments={segments}
                itemBackgroundColors={itemBackgroundColors}
                selectedPalette={selectedPalette}
                spinningSpeed={spinningSpeed}
                onFinished={this.addResult}
              />
            }
          </Grid>
          <Grid item xs={10} md={5}>
            <Prompt 
              isLoading={isLoading}
              setAppState={this.setAppState}
              handleConfig={this.handleGenAIResponse} />
            <BasicTabs 
              isLoading={isLoading}
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
