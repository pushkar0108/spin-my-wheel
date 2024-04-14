import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Palette from './Palette';
import { PALETTES } from '../config/constants';
import { setSelectedPalette } from "../redux/features/appSlice";

export default function PaletteSelector() {
  const dispatch = useDispatch();
  const { selectedPalette } = useSelector((state) => state.app);

  return (
    <Box sx={{ display: 'flex', flexWrap: "wrap" }}>
      {
        PALETTES.map((option, index) => {
          return (
            <Box
              key={index} 
              onClick={() => {
                dispatch(setSelectedPalette(index));
              }}>
              <Palette 
                selected={selectedPalette == index}
                colors={option}
              />
            </Box>
          ) 
        })
      }
    </Box>
  );
}