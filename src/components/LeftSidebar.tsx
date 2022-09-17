// TODO: this should allow selection from some prechosen categories
import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import { CategorySelect } from './CategorySelect';
import { setCategory } from '../store/cardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { presetCategories } from '../constants';

export function LeftSideBar({
  resetCard,
  setBingoCard,
}: {
  setBingoCard: any;
  resetCard: any;
}) {
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
              //@ts-ignore
              dis(setCard(presetCategories[state.category]));
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
              resetCard();
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
