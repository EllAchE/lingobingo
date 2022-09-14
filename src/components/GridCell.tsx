import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

export default function GridCell(props: any) {
  return (
    <Grid
      container
      justifyContent={'space-around'}
      justifyItems={'center'}
      alignItems={'center'}
      xs={2}
      borderColor={'white'}
      border={1}
      height={'120px'}
      textAlign={'center'}
    >
      <Typography sx={{ paddingX: 1 }} variant={'body1'}>
        {props.children}
      </Typography>
    </Grid>
  );
}
