// TODO: this should allow selection from some prechosen categories
import React from 'react';
import { Button, Grid } from '@mui/material';
import { resetCard, setCard, setCategory } from '../store/cardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { presetCategories } from '../constants';
import { createBingoCard } from '../scripts/createGrid';

export default function RandomizeAndReset() {
  const dis = useDispatch();
  const state = useSelector((state: any) => state.card);

  return (
    <Grid container direction="row" justifyContent="center" sx={{ zIndex: 1 }}>
      <Button
        onClick={() => {
          dis(setCategory(state.category));
          dis(
            setCard(
              //@ts-ignore
              createBingoCard(presetCategories[state.category]).bingoCard
            )
          );
        }}
        variant={'contained'}
        sx={{ height: 40, marginRight: 4, zIndex: 2 }}
      >
        Random
      </Button>
      <Button
        onClick={() => {
          dis(resetCard(''));
        }}
        variant={'contained'}
        sx={{ height: 40, zIndex: 2 }}
      >
        Reset
      </Button>
    </Grid>
  );
}
