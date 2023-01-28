import { Button, Grid } from '@mui/material';
import { useState } from 'react';
import { beatPaths } from '../../constants';
import BeatButton from './BeatButton';

export default function RapMenu({
  rapping,
  setRapping,
}: {
  rapping: boolean;
  setRapping: any;
}) {
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement>(
    new Audio('/beats/beat1.mp3')
  );
  const [nextAudio, setNextAudio] = useState<HTMLAudioElement | undefined>(
    undefined
  );

  function chooseBeat(index: number) {
    index = index % beatPaths.length;
    setNextAudio(new Audio(beatPaths[index]));
  }

  return (
    <>
      {!rapping ? (
        <Button
          className="text-2xl"
          sx={{ fontSize: '24px' }}
          variant="contained"
          onClick={() => {
            if (nextAudio) {
              setCurrentAudio(nextAudio);
              setNextAudio(undefined);
              nextAudio.play();
            } else {
              currentAudio.currentTime = 0;
              currentAudio.play();
            }
            setRapping(!rapping);
          }}
        >
          Start😎
        </Button>
      ) : (
        <Button
          className="text-2xl"
          sx={{ fontSize: '24px' }}
          variant="contained"
          onClick={() => {
            // hit stop
            currentAudio.pause();
            nextAudio?.pause();
            setRapping(!rapping);
          }}
        >
          Stop🥺
        </Button>
      )}
      <Grid container alignItems={'spaceAround'} spacing={1}>
        {beatPaths.map((val, index) => {
          return (
            <BeatButton key={index} index={index} chooseBeat={chooseBeat} />
          );
        })}
      </Grid>
    </>
  );
}
