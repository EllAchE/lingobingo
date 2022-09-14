import React, { useEffect, useState } from 'react';
import './App.css';
import { Box, Typography } from '@mui/material';
import { BingoCard } from './components/BingoCard';
import { presetCategories } from './scripts/presetCategories';
import { createGrid } from './scripts/createGrid';
import { SideBar } from './components/Sidebar';

function App() {
  const [category, setCategory] = useState<string>('Corporate');
  const [wordGrid, setWordGrid] = useState<string[]>(
    //@ts-ignore
    createGrid(presetCategories[category]).wordGrid
  );

  const changeCategory = (newCategory: string) => {
    setCategory(newCategory);
    //@ts-ignore
    setWordGrid(createGrid(presetCategories[newCategory]).wordGrid);
  };

  // console.log('bbb');
  // useEffect(() => {
  //   console.log('aaa');
  //   //@ts-ignore
  //   setWordGrid(createGrid(presetCategories[category]).wordGrid);
  // }, [category]);

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
      <BingoCard wordGrid={wordGrid} />
      <SideBar
        category={category}
        setCategory={changeCategory}
        setWordGrid={setWordGrid}
      />
      {/* <CategorySelect category={category} setCategory={setCategory} />
      <CustomInput /> */}
    </Box>
  );
}

export default App;
