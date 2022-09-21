import React from 'react';
import { Grid } from '@mui/material';
import { CategoryAndCustomInput } from './components/CategoryAndCardReset';
import { useSelector } from 'react-redux';
import FireworksAndConfetti from './components/particles/FireworksAndConfetti';
import { BingoCard } from './components/BingoCard';
import RandomizeAndReset from './components/RandomizeAndReset';
import WaterMark from './components/WaterMark';

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
          // sx={{
          //   color: state.showBingoEffects ? 'white' : undefined,
          //   paddingBottom: 1,
          //   paddingTop: 1,
          //   fontFamily: 'Helvetica',
          //   margin: "auto"
          // align="center"
          // }}
        >
          Lingo Bingo - {state.category}
        </div>
      </Grid>
      <Grid item xs={12}>
        {!state.showBingoEffects && <CategoryAndCustomInput />}
      </Grid>
      <Grid item xs={12}>
        <BingoCard />
      </Grid>
      <Grid item xs={12}>
        {!state.showBingoEffects && <RandomizeAndReset />}
      </Grid>
      <WaterMark />
      {state.showBingoEffects && <FireworksAndConfetti />}
    </Grid>
  );
}

export default App;
