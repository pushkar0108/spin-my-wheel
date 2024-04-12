import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import useSound from 'use-sound';
import sound from '../../public/sounds/1.mp3';
import { PALETTES } from '../config/constants';
import { Wheel } from "spin-wheel/dist/spin-wheel-esm.js";

const getSegColors = ({ selectedPalette, segCount }) => {
  const segColors = PALETTES[selectedPalette];
  const totalColors = segColors.length;
  const arr = [];
  let i = 0;
  while (i < segCount) {
    let color = segColors[i % totalColors];
    arr.push(color);
    i++;
  }

  return arr;
};

export default function WheelComponent({
  segments, itemBackgroundColors, selectedPalette, onFinished, spinningSpeed
}) {
  const [wheel, setWheel] = useState(null);
  const [play, { stop }] = useSound(sound);
  const visibleSegments = segments.filter(segment => segment[1]);

  const props = {
    name: 'Movies',
    radius: 0.88,
    itemLabelRadius: 0.92,
    itemLabelRadiusMax: 0.4,
    itemLabelRotation: 0,
    itemLabelAlign: 'right',
    itemLabelBaselineOffset: -0.13,
    itemLabelFont: 'Pragati Narrow',
    itemBackgroundColors: itemBackgroundColors || getSegColors({
      selectedPalette, 
      segCount: visibleSegments.length
    }),
    itemLabelColors: ['#fff', '#000'],
    rotationSpeedMax: 600,
    rotationResistance: -70,
    lineWidth: 0,
    overlayImage: './img/example-2-overlay.svg',
    items: visibleSegments.map(segment => {
      return {
        label: segment[0]
      }
    }),
    onSpin: (argv) => {
      console.log("[onSpin] called: ", argv);
    },
    onRest: ({ currentIndex }) => {
      onFinished(visibleSegments[currentIndex]);
    }
  };

  useEffect(() => {
    console.log("fire once");
    const container = document.querySelector('.wheel-container');
    container.innerHTML = "";
    const newWheel = new Wheel(container, props);
    setWheel(newWheel);
  }, [segments, selectedPalette, spinningSpeed]);

  return (
    <Box
      className="margin-auto wheel-container"
      sx={{
        height: "100%",
        padding: "10px",
        paddingTop: "20px"
      }}
      onClick={() => {
        play();
        setTimeout(stop, 4000);
        wheel.spin(props.rotationSpeedMax);
      }}>

    </Box>
  )
}
