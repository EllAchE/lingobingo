import React, { useEffect, useState } from 'react';
import './App.css';
import { Box, Typography } from '@mui/material';
import { LeftSideBar } from './components/LeftSidebar';
import WaterMark from './components/WaterMark';
import { useSelector } from 'react-redux';
import RightSideBar from './components/RightSidebar';
import FireworksAndConfetti from './components/particles/FireworksAndConfetti';
import { BingoCard } from './components/BingoCard';

function App() {
  const state = useSelector((state: any) => state.card);

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ paddingBottom: 2, paddingTop: 2, fontFamily: 'Helvetica' }}
        margin="auto"
        align="center"
      >
        Lingo Bingo - {state.category}
      </Typography>
      <BingoCard />
      <LeftSideBar />
      <RightSideBar />
      <WaterMark />
      {state.showBingoEffects && <FireworksAndConfetti />}
    </Box>
  );
}

export default App;
