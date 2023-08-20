import React from "react";
import Grid from '@mui/material/Grid';
import Layout from '../components/Layout';
import WheelComponent from '../components/WheelComponent';
import BasicTabs from '../components/BasicTabs';
import Confetti from '../components/Confetti';
import HowToUse from '../components/HowToUse';
import WhatToUse from '../components/WhatToUse';
import "../app/globals.css";

const segColors = [
  '#EE4040',
  '#F0CF50',
  '#815CD1',
  '#3DA5E0',
  '#34A24F',
  '#F9AA1F',
  '#EC3F3F',
  '#FF9000'
];

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
      results: [],
      showConfetti: false
    }
  }
  
  setSegments = (segments) => {
    this.setState({ segments });
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
    const {segments, results, showConfetti} = this.state;
    return (
      <Layout>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={8} md={5}>
            <WheelComponent
              segments={segments}
              segColors={segColors}
              onFinished={this.addResult}
            />
          </Grid>
          <Grid item xs={4} md={5}>
            <BasicTabs 
              segments={segments}
              setSegments={this.setSegments}
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
