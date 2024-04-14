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
import { setSpinningSpeed } from "../redux/features/appSlice";

const ContinuousSlider = ({ leftIcon, rightIcon, onChangeHandler }) => {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChangeHandler && onChangeHandler(newValue);
  };

  return (
    <Box>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        {leftIcon && leftIcon}
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        {rightIcon && rightIcon}
      </Stack>
    </Box>
  );
}

export default function ConfigurationPanel() {
  const dispatch = useDispatch();
  const { selectedPalette, spinningSpeed } = useSelector((state) => state.app);

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
        <SoundSelector />
        <ContinuousSlider 
          leftIcon={<VolumeDown />}
          rightIcon={<VolumeUp />}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography sx={{ mt: 2, mb: 1.5 }} variant="h7" component="div">
          Winning Sound
        </Typography>
        <SoundSelector />
        <ContinuousSlider 
          leftIcon={<VolumeDown />}
          rightIcon={<VolumeUp />}
        />
      </Grid>
    </Grid>
  );
}