// TODO: this should allow selection from some prechosen categories
import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import { CategorySelect } from './CategorySelect';
import { resetCard, setCard, setCategory } from '../store/cardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { presetCategories } from '../constants';
import { createBingoCard } from '../scripts/createGrid';

export function LeftSideBar() {
  const dis = useDispatch();
  const state = useSelector((state: any) => state.card);
  return (
    <Box sx={{ position: 'fixed', top: '35%', left: 8, width: 300 }}>
      <CategorySelect />
      <Grid>
        <Grid>
          <Button
            sx={{ marginTop: 2 }}
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
        <Grid>
          <Button
            sx={{ marginTop: 2 }}
            onClick={() => {
              dis(resetCard(''));
            }}
            variant={'contained'}
          >
            Reset Card
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
