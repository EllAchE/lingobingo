import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export default function TimerCircle() {
  return (
    <CountdownCircleTimer
      isPlaying
      duration={6}
      colors={['#004777', '#F7B801', '#A30000', '#A30000']}
      colorsTime={[6, 4, 2, 0]}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  );
}
