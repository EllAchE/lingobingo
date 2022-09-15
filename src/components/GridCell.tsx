import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

export default function GridCell({
  setSquareStates,
  squareStates,
  position,
  children,
}: any) {
  console.log('comp');
  return (
    <Grid
      container
      justifyContent={'space-around'}
      justifyItems={'center'}
      alignItems={'center'}
      xs={2}
      border={1}
      height={'120px'}
      textAlign={'center'}
      sx={{
        backgroundColor: squareStates[position].isClicked
          ? '#3252a8'
          : undefined,
        color: squareStates[position]?.isClicked ? 'white' : undefined,
        'border-color': 'black',
      }} // light blue
      onClick={() => {
        squareStates[position].isClicked = !squareStates[position].isClicked;

        console.dir('bef');
        console.dir(squareStates);
        setSquareStates([...squareStates]);
        console.dir(squareStates);

        console.dir('aff');
      }}
    >
      <Typography sx={{ paddingX: 1 }} variant={'body1'}>
        {children}
      </Typography>
    </Grid>
  );
}
