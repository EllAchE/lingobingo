// TODO: this should allow selection from some prechosen categories
import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import { CategorySelect } from './CategorySelect';

export function LeftSideBar({
  category,
  setCategory,
  resetCard,
}: {
  category: string;
  setCategory: any;
  resetCard: any;
}) {
  return (
    <Box sx={{ position: 'fixed', top: '35%', left: 8, width: 300 }}>
      <CategorySelect category={category} setCategory={setCategory} />
      <Grid>
        <Grid>
          <Button
            sx={{ marginTop: 2 }}
            onClick={() => {
              setCategory(category);
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
