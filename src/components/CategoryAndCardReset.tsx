// TODO: this should allow selection from some prechosen categories
import React from 'react';
import { Grid } from '@mui/material';
import { CategorySelect } from './CategorySelect';
import { CustomInput } from './CustomInput';

export function CategoryAndCustomInput() {
  return (
    <Grid container direction="row" justifyContent="center" spacing={1}>
      <Grid
        container
        xs={6}
        justifyContent="flex-end"
        justifyItems="center"
        alignItems="center"
        sx={{ paddingRight: 1 }}
      >
        <CategorySelect />
      </Grid>
      <Grid
        container
        xs={6}
        justifyContent="flex-start"
        justifyItems="center"
        alignItems="center"
        sx={{ paddingLeft: 1 }}
      >
        <CustomInput />
      </Grid>
    </Grid>
  );
}
