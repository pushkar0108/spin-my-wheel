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

export default function ResultPanel() {
  const dispatch = useDispatch();
  const { results } = useSelector((state) => state.app);

  return (
    <>
      <Typography variant="h7" component="div">
        We have a winner!
      </Typography>

      <Typography
        sx={{ mt: 2, mb: 1.5 }} 
        variant="h4" 
        component="div">
        {results[0]}
      </Typography>
    </>
  );
}