import React, { useState } from 'react';
import './App.css';
import { Box, Typography } from '@mui/material';
import { presetCategories } from './scripts/presetCategories';
import { createBingoCard } from './scripts/createGrid';
import { SideBar } from './components/Sidebar';
import WaterMark from './components/WaterMark';
import { BingoCardType } from './types';
import { BingoCard } from './components/BingoCard';

function App() {
  const [category, setCategory] = useState<string>('Corporate');
  const [wordGrid, setWordGrid] = useState<BingoCardType>(
    //@ts-ignore
    createBingoCard(presetCategories[category]).wordGrid
  );

  const changeCategory = (newCategory: string) => {
    setCategory(newCategory);
    //@ts-ignore
    setWordGrid(createBingoCard(presetCategories[newCategory]).wordGrid);
  };

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ paddingBottom: 2 }}
        margin="auto"
        align="center"
      >
        Lingo Bingo
      </Typography>
      <BingoCard bingoCard={wordGrid} />
      <SideBar
        category={category}
        setCategory={changeCategory}
        setWordGrid={setWordGrid}
      />
      {/* <CategorySelect category={category} setCategory={setCategory} />
      <CustomInput /> */}
      <WaterMark />
    </Box>
  );
}

export default App;
