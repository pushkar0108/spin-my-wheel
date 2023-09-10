import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import WheelComponent from 'react-wheel-of-prizes';
import useSound from 'use-sound';
import sound from '../../public/sounds/1.mp3';
import { PALETTES } from '../config/constants';

const getSegColors = ({selectedPalette, segCount}) => {
  const segColors = PALETTES[selectedPalette];
  const totalColors = segColors.length;
  const arr = [];
  let i = 0;
  while(i < segCount) {
    let color = segColors[i%totalColors];
    arr.push(color);
    i++;
  }

  return arr;
};

export default function Wheel({ segments, selectedPalette, onFinished }) {
  const [key, setKey] = useState("");
  const [play, { stop }] = useSound(sound);
  const visibleSegments = segments.filter(segment => segment[1]);

  // This is added because "react-wheel-of-prizes" doesn't re-render on prop change, so we use key to re-render is forcefully
  useEffect(() => {
    setKey(Math.random(200));
  }, [segments, selectedPalette]);

  return (
    <Box
    className="margin-auto"
    sx={{
      height: 600,
      overflow: { xs: 'scroll', md: 'hidden' }
    }}
    onClick={() => {
      play();
      setTimeout(stop, 2000);
    }}>
      <WheelComponent
        key={key}
        segments={visibleSegments.map(segment => segment[0])}
        segColors={
          getSegColors({
            selectedPalette, 
            segCount: visibleSegments.length
          })
        }
        // winningSegment='won 10'
        onFinished={onFinished}
        primaryColor='black'
        contrastColor='white'
        buttonText='Spin'
        isOnlyOnce={false}
        size={210}
        upDuration={100}
        downDuration={300}
        fontFamily='Arial'
      />
    </Box>
  )
}
