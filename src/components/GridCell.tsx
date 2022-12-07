import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { setShowBingoEffects, setState } from '../store/cardSlice';
import { useDispatch, useSelector } from 'react-redux';
import checkBingo from '../scripts/checkBingo';

export default function GridCell({ position, children }: any) {
  const dis = useDispatch();
  const state = useSelector((state: any) => state.card);

  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');

  useEffect(() => {
    const w = window.innerWidth - 16; // for margin
    const h = window.innerHeight;
    const boxDim = Math.min(w / state.dims, h / (state.dims + 2.05));
    setHeight(boxDim.toString());
    setWidth(boxDim.toString());
  });

  return (
    <Grid
      container
      item
      justifyContent={'space-around'}
      justifyItems={'center'}
      alignItems={'center'}
      xs
      width={width ? width.toString() + 'px' : undefined}
      height={height ? height.toString() + 'px' : undefined}
      border={1}
      textAlign={'center'}
      key={position}
      sx={{
        backgroundColor: state.cellStates[position].isClicked
          ? state.themeColor
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
          setTimeout(() => dis(setShowBingoEffects(false)), 7000);
        }
        stateCopy.fewestRemaining = bingoCount;
        dis(setState(stateCopy));
      }}
    >
      <div
        className={`grid-cell text-xs sm:text-md md:text-xl px-1 word-wrap break-words max-w-full`}
      >
        {children}
      </div>
    </Grid>
  );
}
