import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

import Layout from '../components/Layout';
import WheelComponentWrapper from '../components/WheelComponent';
import Confetti from '../components/Confetti';
import HowToUse from '../components/HowToUse';
import WhatToUse from '../components/WhatToUse';
import Modal from '../components/Modal';
import ConfigurationPanel from "../components/ConfigurationPanel";
import RightPanel from "../components/RightPanel";


import { setShowConfigModal, showSnackBar, toggleShowTable, toggleMuteWheel } from "../redux/features/appSlice";

export default function Home() {
  const dispatch = useDispatch();
  
  const { snackbar, showConfetti, muteWheel, isLoading, showConfigModal } = useSelector((state) => state.app);

  return (
    <Layout>

      <Box textAlign='center'>
        <ButtonGroup 
          size="small"
          variant="text"
          aria-label="Vertical button group">
          <Button
            onClick={() => dispatch(toggleMuteWheel())}
            key="two"
            startIcon={
              muteWheel ?
              <VolumeOffIcon /> :
              <VolumeUpIcon />
            }>
              {`${muteWheel ? 'UnMute' : 'Mute'} Wheel`}
          </Button>
          <Button key="one">
            <Switch
              defaultChecked
              onClick={() => dispatch(toggleShowTable())}
            />  
            Show Table
          </Button>
        </ButtonGroup>
      </Box>
      
      <Grid container justifyContent="space-around" alignItems="flex-start">
        <Grid item xs={12} md={5}>
          <WheelComponentWrapper isLoading={isLoading} />
        </Grid>
        <RightPanel />
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