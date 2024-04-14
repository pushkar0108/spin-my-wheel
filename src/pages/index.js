import React from "react";
import { useSelector } from "react-redux";
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

export default function Home() {
  const { showConfetti, isLoading } = useSelector((state) => state.app);

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
            <WheelComponent />
          }
        </Grid>
        <Grid item xs={10} md={5}>
          <Prompt />
          <BasicTabs />
        </Grid>
      </Grid>

      <HowToUse />
      <WhatToUse />
      { showConfetti && <Confetti /> }
    </Layout>
  );
}