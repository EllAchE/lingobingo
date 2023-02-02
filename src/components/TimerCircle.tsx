import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export default function TimerCircle({
  pKey,
  setPKey,
  duration,
}: {
  pKey: any;
  setPKey: any;
  duration: number;
}) {
  return (
    <CountdownCircleTimer
      key={pKey}
      isPlaying
      size={90}
      duration={duration}
      colors={['#004777', '#F7B801', '#A30000', '#A30000']}
      colorsTime={[6, 4, 2, 0]}
      onComplete={() => {
        setPKey((pKey + 1) % 30);
      }}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  );
}
