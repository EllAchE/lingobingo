import React, { useEffect, useState } from 'react';
import './App.css';
import { Box, Typography } from '@mui/material';
import { emptyCellStates, presetCategories } from './constants';
import { createBingoCard } from './scripts/createGrid';
import { LeftSideBar } from './components/LeftSidebar';
import WaterMark from './components/WaterMark';
import { BingoCardType, SquareState } from './types';
import { BingoCard } from './components/BingoCard';
import { useDispatch, useSelector } from 'react-redux';
import { setCellStates, setState } from './store/cardSlice';
import RightSideBar from './components/RightSidebar';
import FireworksAndConfetti from './components/particles/FireworksAndConfetti';

function App() {
  const dis = useDispatch();
  const state = useSelector((state: any) => state.card);

  console.log('appp resssss');
  console.log('appp resssss');
  console.log('appp resssss');
  console.log('appp resssss');
  console.log('appp resssss');
  console.log('appp resssss');
  console.log('appp resssss');
  console.log('appp resssss');
  console.log('appp resssss');
  console.log('appp resssss');
  console.log('appp resssss');
  console.log('appp resssss');
  console.log('appp resssss');
  console.log('appp resssss');
  console.log('appp resssss');

  function resetCardCells() {
    dis(setCellStates([...emptyCellStates]));
  }

  const [bingoCard, setBingoCard] = useState<BingoCardType>(
    //@ts-ignore
    createBingoCard(presetCategories[state.category]).bingoCard
  );

  // useEffect(() => {
  //   //@ts-ignore
  //   setBingoCard(createBingoCard(presetCategories[state.category]).bingoCard);
  // }, []);

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
      <LeftSideBar resetCard={resetCardCells} setBingoCard={setBingoCard} />
      <RightSideBar setBingoCard={setBingoCard} />
      <WaterMark />
      {state.showBingoEffects && <FireworksAndConfetti />}
    </Box>
  );
}

export default App;
