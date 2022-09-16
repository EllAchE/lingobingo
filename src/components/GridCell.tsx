import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { setCard, setState } from '../store/cardSlice';
import { useDispatch, useSelector } from 'react-redux';
import checkBingo from '../scripts/checkBingo';

export default function GridCell({ position, children }: any) {
  const dis = useDispatch();
  const state = useSelector((state: any) => state.card);

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
        backgroundColor: state.card[position].isClicked ? '#3252a8' : undefined,
        color: state.card[position]?.isClicked ? 'white' : undefined,
        'border-color': 'black',
      }} // light blue
      onClick={() => {
        const stateCopy = JSON.parse(JSON.stringify(state));
        stateCopy.card[position].isClicked =
          !stateCopy.card[position].isClicked;
        if (!stateCopy.isBingo) {
          const bingoCount = checkBingo(stateCopy.card);
          if (typeof bingoCount != 'number') {
            stateCopy.isBingo = true;
            alert('BINGO');
          } else {
            stateCopy.fewestRemaining = bingoCount;
          }
        }
        dis(setState(stateCopy));
      }}
    >
      <Typography sx={{ paddingX: 1 }} variant={'body1'}>
        {children}
      </Typography>
    </Grid>
  );
}
