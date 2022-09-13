import React from 'react';
import './App.css';
import { Box, Typography } from '@mui/material';
import { BingoCard } from './components/BingoCard';

function App() {
  return (
    <Box className="App-header">
      <Typography variant="h3" sx={{ paddingBottom: 2 }}>
        Lingo Bingo
      </Typography>
      <BingoCard></BingoCard>
    </Box>
  );
}

export default App;
