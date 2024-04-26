import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import Layout from '../components/Layout';
import WheelComponent from '../components/WheelComponent';
import BasicTabs from '../components/BasicTabs';
import Confetti from '../components/Confetti';
import HowToUse from '../components/HowToUse';
import WhatToUse from '../components/WhatToUse';
import Prompt from '../components/Prompt';
import Modal from '../components/Modal';
import ConfigurationPanel from "../components/ConfigurationPanel";
import { setShowConfigModal, showSnackBar } from "../redux/features/appSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { snackbar, showConfetti, isLoading, showConfigModal } = useSelector((state) => state.app);

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

      <Modal
        isOpen={showConfigModal}
        handleModalClose={() => {
          dispatch(setShowConfigModal(false));
        }}
      >
        <ConfigurationPanel  />
      </Modal>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => {
          dispatch(showSnackBar({ open: false }));
        }}
        message={snackbar.message}>
        <Alert severity={snackbar.severity}>
          <AlertTitle>{snackbar.title}</AlertTitle>
          {snackbar.message}
        </Alert>
      </Snackbar>
      { showConfetti && <Confetti /> }
    </Layout>
  );
}