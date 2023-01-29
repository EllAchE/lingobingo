import React, { useState } from 'react';
import { Grid } from '@mui/material';
import MovingText from './components/rapApp/RapText';
import RapMenu from './components/rapApp/RapMenu';

function RapApp() {
  const [rapping, setRapping] = useState<boolean>(false);

  return (
    <>
      <canvas className="-z-40 absolute top-0 left-0" id="cv"></canvas>
      <Grid
        container
        sx={{ height: '100%' }}
        direction="row"
        alignItems="center"
        justifyContent={'center'}
      >
        <MovingText />
        <RapMenu rapping={rapping} setRapping={setRapping} />
      </Grid>
    </>
  );
}

export default RapApp;
