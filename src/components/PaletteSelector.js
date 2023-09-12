import * as React from 'react';
import Box from '@mui/material/Box';
import Palette from './Palette';
import { PALETTES } from '../config/constants';

export default function PaletteSelector({ 
  selectedPalette, setAppState 
}) {
  return (
    <Box sx={{ display: 'flex', flexWrap: "wrap" }}>
      {
        PALETTES.map((option, index) => {
          return (
            <Box
              key={index} 
              onClick={() => setAppState({ selectedPalette: index })}>
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