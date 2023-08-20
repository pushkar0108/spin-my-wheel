import React, {useEffect} from 'react'
import Confetti from 'react-confetti';

import useSound from 'use-sound';
import sound from '../../public/sounds/1.mp3';

export default () => {
  const [play, { stop }] = useSound(sound);

  useEffect(() => {
    play();
  }, []);

  return (
    <Confetti
      recycle={false}
      width={window.width}
      height={window.height}
      // pieces={760}
      // friction={0.95}
    />
  )
}
