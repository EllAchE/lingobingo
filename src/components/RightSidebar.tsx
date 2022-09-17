// TODO: this should allow selection from some prechosen categories
import React from 'react';
import { Box, Typography } from '@mui/material';
import { CustomInput } from './CustomInput';
import { useSelector } from 'react-redux';

export default function RightSideBar({ setBingoCard }: { setBingoCard: any }) {
  const state = useSelector((state: any) => state.card);
  return (
    <Box sx={{ position: 'fixed', top: '35%', right: 8, width: 300 }}>
      <Typography>
        {state.fewestRemaining
          ? `Remaining to Bingo: ${state.fewestRemaining}`
          : 'BINGO!'}
      </Typography>
      <CustomInput setBingoCard={setBingoCard} />
    </Box>
  );
}
