import React, { useRef, useState } from 'react';
import { Button, Grid } from '@mui/material';
import RapText from './components/rapApp/RapText';
import RapMenu from './components/rapApp/RapMenu';
import RapWaterMark from './components/bingo/RapWatermark';

function RapApp() {
  let animationRef = useRef(null);
  const [a, setA] = useState(true);

  return (
    <>
      {a ? (
        <Grid
          container
          sx={{ height: '100%' }}
          direction="row"
          alignItems="center"
          justifyContent={'center'}
        >
          <Button
            variant="contained"
            onClick={() => {
              setA(false);
            }}
          >
            Want to rhyme?
          </Button>
        </Grid>
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
            <RapText animationRef={animationRef} />
            <RapMenu animationRef={animationRef} />
          </Grid>
        </>
      )}
      <RapWaterMark />
    </>
  );
}

export default RapApp;
