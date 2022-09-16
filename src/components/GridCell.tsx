import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { setCard } from '../store/cardSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function GridCell({ position, children }: any) {
  const dis = useDispatch();
  const cardState = useSelector((state: any) => state.card.card);

  console.dir(position);
  console.dir(cardState);

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
        backgroundColor: cardState[position].isClicked ? '#3252a8' : undefined,
        color: cardState[position]?.isClicked ? 'white' : undefined,
        'border-color': 'black',
      }} // light blue
      onClick={() => {
        const stateCopy = JSON.parse(JSON.stringify(cardState));
        stateCopy[position].isClicked = !stateCopy[position].isClicked;
        dis(setCard(stateCopy));
      }}
    >
      <Typography sx={{ paddingX: 1 }} variant={'body1'}>
        {children}
      </Typography>
    </Grid>
  );
}
