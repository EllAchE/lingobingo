import React, { useRef, useState } from 'react';
import { Button, Grid } from '@mui/material';
import MovingText from './components/rapApp/RapText';
import RapMenu from './components/rapApp/RapMenu';

function RapApp() {
  let animationRef = useRef(null);
  const [a, setA] = useState(true);

  return (
    <>
      {a ? (
        <Button onClick={() => setA(false)}>Want to rhyme?</Button>
      ) : (
        <>
          <canvas className="-z-40 absolute top-0 left-0" id="cv"></canvas>
          <Grid
            container
            sx={{ height: '100%' }}
            direction="row"
            alignItems="center"
            justifyContent={'center'}
          >
            <MovingText animationRef={animationRef} />
            <RapMenu animationRef={animationRef} />
          </Grid>
        </>
      )}
    </>
  );
}

export default RapApp;
