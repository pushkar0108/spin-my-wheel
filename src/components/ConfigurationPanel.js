import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import PaletteSelector from './PaletteSelector';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

const ContinuousSlider = ({ leftIcon, rightIcon }) => {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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

export default function ConfigurationPanel({ 
  colors, selectedPalette, setSelectedPalette 
}) {
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
        <PaletteSelector
            selectedPalette={selectedPalette}
            setSelectedPalette={setSelectedPalette} />
      </Grid>
      <Grid item xs={6}>
        <Typography sx={{ mt: 2, mb: 1.5 }} variant="h7" component="div">
          Spinning Time
        </Typography>
        <ContinuousSlider />
      </Grid>
      <Grid item xs={6}>
        <Typography sx={{ mt: 2, mb: 1.5 }} variant="h7" component="div">
          Spinning Speed
        </Typography>
        <ContinuousSlider />
      </Grid>
      <Grid item xs={12}>
        <Typography sx={{ mt: 2, mb: 1.5 }} variant="h7" component="div">
          Spining Sound
        </Typography>
        <ContinuousSlider 
          leftIcon={<VolumeDown />}
          rightIcon={<VolumeUp />}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography sx={{ mt: 2, mb: 1.5 }} variant="h7" component="div">
          Winning Sound
        </Typography>
        <ContinuousSlider 
          leftIcon={<VolumeDown />}
          rightIcon={<VolumeUp />}
        />
      </Grid>
    </Grid>
  );
}