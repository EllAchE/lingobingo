import React, { useEffect, useState } from 'react';
import './App.css';
import { Box, Typography } from '@mui/material';
import { presetCategories } from './scripts/presetCategories';
import { createBingoCard } from './scripts/createGrid';
import { SideBar } from './components/Sidebar';
import WaterMark from './components/WaterMark';
import { BingoCardType, SquareState } from './types';
import { BingoCard } from './components/BingoCard';

function App() {
  const [category, setCategory] = useState<string>('Corporate');
  const [bingoCard, setBingoCard] = useState<BingoCardType>(
    //@ts-ignore
    createBingoCard(presetCategories[category]).bingoCard
  );
  const [squareStates, setSquareStates] = useState<SquareState[]>([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

  function clearCellSelections() {
    const newSquareStates = squareStates?.map((square: SquareState) => {
      square.isClicked = false;
      return square;
    });
    setSquareStates([...newSquareStates]);
  }

  function changeCategory(newCategory: string) {
    setCategory(newCategory);
    //@ts-ignore
    setBingoCard(createBingoCard(presetCategories[newCategory]).bingoCard);
    clearCellSelections();
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
        Lingo Bingo
      </Typography>
      <BingoCard
        bingoCard={bingoCard}
        setSquareStates={setSquareStates}
        squareStates={squareStates}
      />
      <SideBar
        category={category}
        setCategory={changeCategory}
        setWordGrid={setBingoCard}
        clearCellSelections={clearCellSelections}
      />
      <WaterMark />
    </Box>
  );
}

export default App;
