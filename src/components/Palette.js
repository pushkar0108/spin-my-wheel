import * as React from 'react';
import Box from '@mui/material/Box';

export default function Palette({ colors, selected }) {
  return (
    <Box 
      className="m-2 rounded-xl overflow-hidden cursor-pointer" 
      sx={{ 
        width: 100, 
        height: 70,
        border: selected ? "2px solid red" : "",
      }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        height: "100%"
      }}>
        {
          colors.map((color, index) => {
            return <Box item xs sx={{
              background: color,
              flexGrow: 1,
              flexBasis: 0,
            }} key={color}></Box>
          })
        }
      </Box>
    </Box>
  );
}