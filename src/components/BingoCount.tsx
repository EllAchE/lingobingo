// TODO: this should allow selection from some prechosen categories
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

export default function BingoCount() {
  const state = useSelector((state: any) => state.card);
  return (
    <Box sx={{ position: 'absolute', right: 60, bottom: 0 }}>
      <Typography>
        {state.fewestRemaining
          ? `Remaining to Bingo: ${state.fewestRemaining}`
          : 'BINGO!'}
      </Typography>
    </Box>
  );
}
