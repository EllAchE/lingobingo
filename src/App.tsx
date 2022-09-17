import React from 'react';
import './styles/App.css';
import { Grid, Typography } from '@mui/material';
import { CategoryAndCustomInput } from './components/CategoryAndCardReset';
import { useSelector } from 'react-redux';
import FireworksAndConfetti from './components/particles/FireworksAndConfetti';
import { BingoCard } from './components/BingoCard';
import StyleProvider from './styles/StyleProvider';
import RandomizeAndReset from './components/RandomizeAndReset';

function App() {
  const state = useSelector((state: any) => state.card);

  return (
    <>
      <StyleProvider />
      <Grid direction="column" container spacing={1}>
        <Grid>
          <Typography
            variant="h3"
            sx={{
              color: state.showBingoEffects ? 'white' : undefined,
              paddingBottom: 1,
              paddingTop: 1,
              fontFamily: 'Helvetica',
            }}
            margin="auto"
            align="center"
          >
            Lingo Bingo - {state.category}
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          {!state.showBingoEffects && <CategoryAndCustomInput />}
        </Grid>
        <Grid item xs={12} md={8}>
          <BingoCard />
        </Grid>
        <Grid item xs={12} md={2}>
          {!state.showBingoEffects && <RandomizeAndReset />}
        </Grid>
        {state.showBingoEffects && <FireworksAndConfetti />}
      </Grid>
    </>
  );
}

export default App;
