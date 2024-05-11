import React from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

export default function AppConfetti({ }) {
  const { width, height } = useWindowSize();

  return (
    <Confetti
      recycle={false}
      width={width}
      height={height}
      // pieces={760}
      // friction={0.95}
    />
  )
}
