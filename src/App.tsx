import React, { useState } from 'react';
import './App.css';
import { Box, Typography } from '@mui/material';
import { presetCategories } from './scripts/presetCategories';
import { createBingoCard } from './scripts/createGrid';
import { LeftSideBar } from './components/LeftSidebar';
import WaterMark from './components/WaterMark';
import { BingoCardType, SquareState } from './types';
import { BingoCard } from './components/BingoCard';
import { useDispatch, useSelector } from 'react-redux';
import { setCard, setState } from './store/cardSlice';
import RightSideBar from './components/RightSidebar';

function App() {
  const [category, setCategory] = useState<string>('Corporate');
  const [bingoCard, setBingoCard] = useState<BingoCardType>(
    //@ts-ignore
    createBingoCard(presetCategories[category]).bingoCard
  );

  const dis = useDispatch();
  const state = useSelector((state: any) => state.card);

  function resetCard() {
    const newState = JSON.parse(JSON.stringify(state));
    newState?.card?.map((square: SquareState) => {
      square.isClicked = false;
      return square;
    });
    newState.isBingo = false;
    newState.fewestRemaining = 5;
    dis(setState(newState));
  }

  function changeCategory(newCategory: string) {
    setCategory(newCategory);
    //@ts-ignore
    dis(setCard(createBingoCard(presetCategories[newCategory]).bingoCard));
    resetCard();
  }

  //useEffect(() => {}, [squareStates]);

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ paddingBottom: 2, paddingTop: 2, fontFamily: 'Helvetica' }}
        margin="auto"
        align="center"
      >
        Lingo Bingo - {category}
      </Typography>
      <BingoCard bingoCard={bingoCard} />
      <LeftSideBar
        category={category}
        setCategory={changeCategory}
        resetCard={resetCard}
      />
      <RightSideBar setBingoCard={setBingoCard} />
      <WaterMark />
    </Box>
  );
}

export default App;
