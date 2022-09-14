import React, { useState } from 'react';
import './App.css';
import { Box, Typography } from '@mui/material';
import { BingoCard } from './components/BingoCard';
import { CategorySelect } from './components/CategorySelect';
import { presetCategories } from './components/presetCategories';

function App() {
  const [category, setCategory] = useState('Corporate');
  const options = Object.keys(presetCategories);

  return (
    <Box className="App-header">
      <Typography variant="h3" sx={{ paddingBottom: 2 }}>
        Lingo Bingo
      </Typography>
      <BingoCard category={category} setCategory={setCategory} />
      <CategorySelect setCategory={setCategory} options={options} />
    </Box>
  );
}

export default App;
