import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';

export default function SoundSelector({}){

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      mb: 2
    }}>
      <AudiotrackIcon sx={{mr: 1}} />
      <Select
        sx={{
          flexGrow: 1
        }}
        value={20}
        onChange={() => {

        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <PlayArrowIcon sx={{ml: 1}} />
      <StopIcon sx={{ml: 1}} />
    </Box>
  );
}