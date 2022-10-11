import React, { useState } from 'react';
import { Alert, Grid, Snackbar } from '@mui/material';
import { CategoryAndCustomInput } from './components/CategoryAndCardReset';
import { useSelector } from 'react-redux';
import FireworksAndConfetti from './components/particles/FireworksAndConfetti';
import { BingoCard } from './components/BingoCard';
import RandomizeAndReset from './components/RandomizeAndReset';
import WaterMark from './components/WaterMark';
import { CreateYourOwnCard } from './components/CreateYourOwnCard';

function App() {
  const state = useSelector((state: any) => state.card);

  // Create Success Snackbar
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  // Snackbar end

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
      {state.isEditing ? (
        <CreateYourOwnCard successSnack={handleClick} />
      ) : (
        <BingoCard />
      )}
      <Grid item xs={12}>
        {!state.showBingoEffects && !state.isEditing && <RandomizeAndReset />}
      </Grid>
      <WaterMark />
      {state.showBingoEffects && <FireworksAndConfetti />}
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: '100%', right: 10 }}
        >
          Created new category!
        </Alert>
      </Snackbar>
    </Grid>
  );
}

export default App;
