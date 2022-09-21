// TODO: this should allow selection from some prechosen categories
import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

export default function BingoCount() {
  const state = useSelector((state: any) => state.card);
  return (
    <Box
      className="right-1 sm:right-32"
      sx={{ position: 'absolute', bottom: 4 }}
    >
      <div
        className={`${
          state.showBingoEffects ? 'text-white' : 'text-black'
        } md:text-xl`}
      >
        {state.fewestRemaining
          ? `Remaining to Bingo: ${state.fewestRemaining}`
          : 'BINGO!'}
      </div>
    </Box>
  );
}
