import React from 'react';
import { Grid } from '@mui/material';
import { CategoryAndCustomInput } from './components/CategoryAndCardReset';
import { useSelector } from 'react-redux';
import FireworksAndConfetti from './components/particles/FireworksAndConfetti';
import { BingoCard } from './components/BingoCard';
import RandomizeAndReset from './components/RandomizeAndReset';
import WaterMark from './components/WaterMark';
import { CreateYourOwnCard } from './components/CreateYourOwnCard';

function App() {
  const state = useSelector((state: any) => state.card);

  return (
    <Grid direction="column" container spacing={1}>
      <Grid
        sx={{ paddingBottom: 2 }}
        container
        justifyContent="center"
        justifyItems="center"
      >
        <div
          className={`m-auto py-2 md:py-4 text-3xl md:text-4xl text-${
            state.showBingoEffects ? 'white' : 'black'
          }`}
        >
          {state.isEditing
            ? 'Create New Lingo Bingo!'
            : `Lingo Bingo - ${state.category}`}
        </div>
      </Grid>
      {!state.showBingoEffects && <CategoryAndCustomInput />}
      {state.isEditing ? <CreateYourOwnCard /> : <BingoCard />}
      <Grid item xs={12}>
        {!state.showBingoEffects && !state.isEditing && <RandomizeAndReset />}
      </Grid>
      <WaterMark />
      {state.showBingoEffects && <FireworksAndConfetti />}
    </Grid>
  );
}

export default App;
