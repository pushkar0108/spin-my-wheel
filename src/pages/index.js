import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Switch from '@mui/material/Switch';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

import Layout from '../components/Layout';
import WheelComponentWrapper from '../components/WheelComponent';
import Confetti from '../components/Confetti';
import HowToUse from '../components/HowToUse';
import WhatToUse from '../components/WhatToUse';
import RightPanel from "../components/RightPanel";
import ResultPanel from "../components/ResultPanel";
import Modal from '../components/Modal';

import { toggleShowTable, toggleMuteWheel, setShowResultModal } from "../redux/features/appSlice";

export default function Home() {
  const dispatch = useDispatch();
  const handle = useFullScreenHandle();
  
  const { showConfetti, fullScreenCounter, muteWheel, isLoading, showResultModal } = useSelector((state) => state.app);

  useEffect(() => {
    if (!handle.active && fullScreenCounter) {
      handle.enter();
    }
  }, [fullScreenCounter]);

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
      
      <FullScreen handle={handle}>
        <div id="fullscreen-container">
          <Grid container justifyContent="space-around" alignItems="flex-start">
            <Grid item xs={12} md={5}>
              <WheelComponentWrapper isLoading={isLoading} />
            </Grid>
            <RightPanel />
          </Grid>
          { showConfetti && <Confetti /> }
          <Modal
            container={() => document.getElementById("fullscreen-container")}
            isOpen={showResultModal}
            handleModalClose={() => {
              dispatch(setShowResultModal(false));
            }}>
            <ResultPanel  />
          </Modal>
        </div>
      </FullScreen>

      <HowToUse />
      <WhatToUse />
    </Layout>
  );
}