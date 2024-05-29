import _ from 'lodash';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import useSound from 'use-sound';
import winnerAudioFile from '../../public/sounds/winner.mp3';
import { PALETTES, SPINNING_SOUNDS } from '../config/constants';
import { Wheel } from "spin-wheel/dist/spin-wheel-esm.js";
import { addResult, setShowConfetti } from "../redux/features/appSlice";

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

export default function WheelComponentWrapper({ isLoading }) {
  return (
    isLoading ?
    <Box className="margin-auto wheel-container"
      sx={{
        height: "100%",
        padding: "10px",
        paddingTop: "20px"
      }}>
        <Skeleton 
          variant="circular" 
          width={400} 
          height={400} 
          animation="wave" />
    </Box>
    :
    <WheelComponent />
  )
}

export function WheelComponent() {
  const dispatch = useDispatch();
  const { 
    segments, itemBackgroundColors, selectedPalette, spinningSpeed, spinningSoundIndex, spinningSoundVolume, winningSoundVolume, muteWheel,
  } = useSelector((state) => state.app);

  const [wheel, setWheel] = useState(null);
  const [play, { sound, stop }] = useSound(
    SPINNING_SOUNDS[spinningSoundIndex][1], {
    soundEnabled: !muteWheel,
    volume: spinningSoundVolume,
  });

  const [playWinningSound] = useSound(winnerAudioFile, {
    volume: 1,
  });

  const playDebouncedWinningSound = _.debounce(playWinningSound, 9 * 1000);

  useEffect(() => {
    sound && sound.volume(muteWheel ? 0 : spinningSoundVolume);
  }, [muteWheel]);
  
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
    isInteractive: false,
    lineWidth: 0,
    overlayImage: './img/example-2-overlay.svg',
    items: visibleSegments.map(segment => {
      return {
        label: segment[0]
      }
    }),
    onSpin: (argv) => {
      // console.log("[onSpin] called: ", argv);
    },
    onRest: ({ currentIndex }) => {
      dispatch(addResult(visibleSegments[currentIndex]));
      setTimeout(() => {
        dispatch(setShowConfetti(false));
      }, 10 * 1000);
    }
  };

  useEffect(() => {
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
        playDebouncedWinningSound();
        wheel.spin(props.rotationSpeedMax);
      }}>
    </Box>
  )
}
