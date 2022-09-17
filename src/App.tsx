import React from 'react';
import './styles/App.css';
import { Grid, Typography } from '@mui/material';
import { CategoryAndCardReset } from './components/CategoryAndCardReset';
import WaterMark from './components/WaterMark';
import { useSelector } from 'react-redux';
import BingoCount from './components/BingoCount';
import FireworksAndConfetti from './components/particles/FireworksAndConfetti';
import { BingoCard } from './components/BingoCard';

function App() {
  const state = useSelector((state: any) => state.card);

  return (
    <Grid direction="column" container spacing={2}>
      <Grid>
        <Typography
          variant="h3"
          sx={{ paddingBottom: 2, paddingTop: 2, fontFamily: 'Helvetica' }}
          margin="auto"
          align="center"
        >
          Lingo Bingo - {state.category}
        </Typography>
      </Grid>
      <Grid item xs={12} md={2}>
        <CategoryAndCardReset />
      </Grid>
      <Grid item xs={12} md={8}>
        <BingoCard />
      </Grid>
      <BingoCount />
      {state.showBingoEffects && <FireworksAndConfetti />}
    </Grid>
  );
}

export default App;
