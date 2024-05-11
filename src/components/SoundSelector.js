import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import useSound from 'use-sound';

export default function SoundSelector({ 
  soundIndex, volume, sounds, handleChange 
}){
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound(sounds[soundIndex][1], {
    volume,
    onend: () => { setIsPlaying(false); },
  });

  const handleOptionChange = (event) => {
    handleChange(event.target.value);
    setIsPlaying(false);
    stop();
  };

  useEffect(() => {
    return () => {
      stop();
    };
  }, []); 

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      mb: 2
    }}>
      <AudiotrackIcon sx={{mr: 1}} />
      <Select
        value={soundIndex}
        onChange={handleOptionChange}
        sx={{ flexGrow: 1, mr: 1 }}
      >
        {
          sounds.map((sound, index) => {
            const [name, value] = sound;
            return (
              <MenuItem key={name} value={index}>
                {name}
              </MenuItem>
            )
          })
        }
      </Select>

      {
        !isPlaying ?
        <Tooltip title="Play">
          <IconButton
            onClick={() => {
              play();
              setIsPlaying(true);
            }}
            aria-label="play">
            <PlayArrowIcon />
          </IconButton>
        </Tooltip> :
        <Tooltip title="Stop">
          <IconButton
            onClick={() => {
              stop();
              setIsPlaying(false);
            }}
            aria-label="stop">
            <StopIcon />
          </IconButton>
        </Tooltip>
      }
    </Box>
  );
}