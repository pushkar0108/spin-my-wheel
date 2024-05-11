import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PaletteSelector from './PaletteSelector';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import SoundSelector from './SoundSelector';
import { setSpinningSpeed, setSpinningSoundIndex, setWinningSoundIndex, setSpinningSoundVolume, setWinningSoundVolume } from "../redux/features/appSlice";
import { SPINNING_SOUNDS, WINNING_SOUNDS } from '../config/constants';

const ContinuousSlider = ({ value, leftIcon, rightIcon, onChangeHandler }) => {
  const handleChange = (event, newValue) => {
    onChangeHandler(newValue);
  };

  return (
    <Box>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        {leftIcon && leftIcon}
        <Slider
          min={0}
          max={1}
          step={.001}
          aria-label="Volume"
          value={value}
          onChange={handleChange} />
        {rightIcon && rightIcon}
      </Stack>
    </Box>
  );
}

export default function ConfigurationPanel() {
  const dispatch = useDispatch();
  const { selectedPalette, spinningSpeed, spinningSoundIndex, spinningSoundVolume, winningSoundIndex, winningSoundVolume } = useSelector((state) => state.app);

  return (
    <Grid container spacing={2}>
      <Grid container item xs={12}>

        <Grid item xs={8}>
          <Typography variant="h4" component="div">
              Wheel Settings
          </Typography>
        </Grid>
        <Grid item xs={4}>
          {/* <Button variant="text">Cancel</Button>
          <Button variant="outlined">Save</Button> */}
        </Grid>
      </Grid>
      
      <Grid item xs={12}>
        <Typography sx={{ mt: 2, mb: 1.5 }} variant="h7" component="div">
          Palette
        </Typography>
        <PaletteSelector />
      </Grid>
      <Grid item xs={12}>
        <Typography sx={{ mt: 2, mb: 1.5 }} variant="h7" component="div">
          Spinning Speed (This will increase speed time as well)
        </Typography>
        <Slider
          aria-label="Spinning-Time"
          min={100}
          max={1000}
          value={spinningSpeed}
          onChange={(event, newValue) => {
            dispatch(setSpinningSpeed(newValue));
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography sx={{ mt: 2, mb: 1.5 }} variant="h7" component="div">
          Spining Sound
        </Typography>
        <SoundSelector 
          key={"spinning-sound-selector"}
          soundIndex={spinningSoundIndex}
          volume={spinningSoundVolume}
          sounds={SPINNING_SOUNDS} 
          handleChange={(sound) => {
            dispatch(setSpinningSoundIndex(sound));
          }}
        />
        <ContinuousSlider
          value={spinningSoundVolume}
          onChangeHandler={(newValue) => {
            dispatch(setSpinningSoundVolume(newValue));
          }}
          leftIcon={<VolumeDown />}
          rightIcon={<VolumeUp />}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography sx={{ mt: 2, mb: 1.5 }} variant="h7" component="div">
          Winning Sound
        </Typography>
        <SoundSelector
          key={"winning-sound-selector"}
          soundIndex={winningSoundIndex}
          volume={winningSoundVolume}
          sounds={WINNING_SOUNDS} 
          handleChange={(sound) => {
            dispatch(setWinningSoundIndex(sound));
          }}
        />
        <ContinuousSlider 
          value={winningSoundVolume}
          onChangeHandler={(newValue) => {
            dispatch(setWinningSoundVolume(newValue));
          }}
          leftIcon={<VolumeDown />}
          rightIcon={<VolumeUp />}
        />
      </Grid>
    </Grid>
  );
}