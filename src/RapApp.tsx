import React, { useState } from 'react';
import { Grid } from '@mui/material';
import MovingText from './components/rapApp/RapText';
import RapMenu from './components/rapApp/RapMenu';

function RapApp() {
  const [rapping, setRapping] = useState<boolean>(false);

  return (
    <Grid
      container
      sx={{ height: '100%' }}
      direction="row"
      spacing={1}
      alignItems="center"
      justifyContent={'center'}
      justifyItems={'center'}
    >
      <MovingText wordOne="Urban" wordTwo="Bourbon" />
      <RapMenu rapping={rapping} setRapping={setRapping} />
    </Grid>
  );
}

export default RapApp;
