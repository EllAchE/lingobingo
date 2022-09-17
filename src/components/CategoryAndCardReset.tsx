// TODO: this should allow selection from some prechosen categories
import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { CategorySelect } from './CategorySelect';
import { resetCard, setCard, setCategory } from '../store/cardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { presetCategories } from '../constants';
import { createBingoCard } from '../scripts/createGrid';
import { CustomInput } from './CustomInput';

export function CategoryAndCardReset() {
  const dis = useDispatch();
  const state = useSelector((state: any) => state.card);

  console.log(window.innerWidth);

  return (
    <Grid container direction="row" justifyContent="space-around" spacing={2}>
      <Grid md={1} />
      <Grid
        container
        xs={6}
        md={2}
        justifyContent="center"
        justifyItems="center"
      >
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
        >
          Randomize Card
        </Button>
      </Grid>
      <Grid
        container
        xs={6}
        md={2}
        justifyContent="center"
        justifyItems="center"
      >
        <Button
          onClick={() => {
            dis(resetCard(''));
          }}
          variant={'contained'}
        >
          Reset Card
        </Button>
      </Grid>
      <Grid
        container
        xs={6}
        md={2}
        justifyContent="center"
        justifyItems="center"
        alignItems="center"
      >
        <CategorySelect />
      </Grid>
      <Grid
        container
        xs={6}
        md={2}
        justifyContent="center"
        justifyItems="center"
        alignItems="center"
      >
        <CustomInput />
      </Grid>
      <Grid md={1} />
    </Grid>
  );
}
