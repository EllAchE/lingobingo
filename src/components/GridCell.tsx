import React from 'react';
import Grid from '@mui/material/Grid';
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
      xs
      border={1}
      minHeight={'15vh'}
      textAlign={'center'}
      key={position}
      sx={{
        backgroundColor: state.cellStates[position].isClicked
          ? '#3252a8'
          : undefined,
        color:
          state.cellStates[position]?.isClicked || state.showBingoEffects
            ? 'white'
            : undefined,
        borderColor: state.showBingoEffects ? 'white' : 'black',
      }} // light blue
      onClick={() => {
        const stateCopy = JSON.parse(JSON.stringify(state));
        stateCopy.cellStates[position].isClicked =
          !stateCopy.cellStates[position].isClicked;
        const bingoCount = checkBingo(stateCopy.cellStates, stateCopy.dims);
        if (bingoCount === 0 && !stateCopy.isBingo) {
          stateCopy.isBingo = true;
          stateCopy.showBingoEffects = true;
          setTimeout(() => dis(setShowBingoEffects(false)), 5000);
        }
        stateCopy.fewestRemaining = bingoCount;
        dis(setState(stateCopy));
      }}
    >
      <div className="text-xs sm:text-xl px-2">{children}</div>
    </Grid>
  );
}
