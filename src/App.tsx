import React, { useEffect, useState } from 'react';
import './App.css';
import { Box, Typography } from '@mui/material';
import { BingoCard } from './components/BingoCard';
import { CategorySelect } from './components/CategorySelect';
import { presetCategories } from './components/presetCategories';
import { CustomInput } from './components/CustomInput';
import { createGrid } from './scripts/createGrid';

function App() {
  const [category, setCategory] = useState('Corporate');
  const [wordGrid, setWordGrid] = useState<string[]>(
    //@ts-ignore
    createGrid(presetCategories[category]).wordGrid
  );

  useEffect(() => {
    //@ts-ignore
    setWordGrid(createGrid(presetCategories[category]).wordGrid);
  }, [category]);

  console.log(wordGrid);

  return (
    <Box className="App-header">
      <Typography variant="h3" sx={{ paddingBottom: 2 }}>
        Lingo Bingo
      </Typography>
      <BingoCard wordGrid={wordGrid} />
      <CategorySelect category={category} setCategory={setCategory} />
      <CustomInput />
    </Box>
  );
}

export default App;
