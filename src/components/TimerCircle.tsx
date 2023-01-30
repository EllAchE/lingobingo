import { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export default function TimerCircle() {
  const [pkey, setPKey] = useState(0);
  return (
    <CountdownCircleTimer
      key={pkey}
      isPlaying
      size={90}
      duration={6}
      colors={['#004777', '#F7B801', '#A30000', '#A30000']}
      colorsTime={[6, 4, 2, 0]}
      onComplete={() => {
        console.log('chging key');
        setPKey((pkey + 1) % 30);
      }}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  );
}
