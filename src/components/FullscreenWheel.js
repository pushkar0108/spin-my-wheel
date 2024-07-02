import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from "react-redux";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Switch from '@mui/material/Switch';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { useTheme } from '@mui/material/styles';
import RightPanel from "./RightPanel";
import ResultPanel from "./ResultPanel";
import Modal from './Modal';
import WheelComponentWrapper from './WheelComponent';
import Confetti from './Confetti';

import { toggleShowTable, toggleMuteWheel, setShowResultModal } from "../redux/features/appSlice";

const FullscreenWheel = ({}) => {
  const dispatch = useDispatch();
  const handle = useFullScreenHandle();
  const theme = useTheme();
  
  const { showConfetti, fullScreenCounter, muteWheel, isLoading, showResultModal } = useSelector((state) => state.app);

  useEffect(() => {
    if (!handle.active && fullScreenCounter) {
      handle.enter();
    }
  }, [fullScreenCounter]);

  return (
    <Box sx={{mb: 4}}>
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
        <div id="fullscreen-container" style={{ 
          height: "100%",
          background: theme.palette.mode === 'dark' ? '#121212' : 'white' 
        }}>
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
    </Box>
  )
};

export default FullscreenWheel;