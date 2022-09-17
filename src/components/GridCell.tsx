import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { setShowBingoEffects, setState } from '../store/cardSlice';
import { useDispatch, useSelector } from 'react-redux';
import checkBingo from '../scripts/checkBingo';

export default function GridCell({ position, children }: any) {
  const dis = useDispatch();
  const state = useSelector((state: any) => state.card);

  return (
    <Grid
      container
      item
      justifyContent={'space-around'}
      justifyItems={'center'}
      alignItems={'center'}
      xs={2}
      border={1}
      height={'110px'}
      textAlign={'center'}
      key={position}
      sx={{
        backgroundColor: state.cellStates[position].isClicked
          ? '#3252a8'
          : undefined,
        color: state.cellStates[position]?.isClicked ? 'white' : undefined,
        borderColor: 'black',
      }} // light blue
      onClick={() => {
        const stateCopy = JSON.parse(JSON.stringify(state));
        stateCopy.cellStates[position].isClicked =
          !stateCopy.cellStates[position].isClicked;
        const bingoCount = checkBingo(stateCopy.cellStates);
        if (bingoCount == 0 && !stateCopy.isBingo) {
          stateCopy.isBingo = true;
          stateCopy.showBingoEffects = true;
          setTimeout(() => dis(setShowBingoEffects(false)), 5000);
        }
        stateCopy.fewestRemaining = bingoCount;
        dis(setState(stateCopy));
      }}
    >
      <Typography sx={{ paddingX: 1 }} variant={'body1'}>
        {children}
      </Typography>
    </Grid>
  );
}
