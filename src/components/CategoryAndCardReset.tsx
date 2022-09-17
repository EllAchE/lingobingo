// TODO: this should allow selection from some prechosen categories
import React from 'react';
import { Grid } from '@mui/material';
import { CategorySelect } from './CategorySelect';
import { CustomInput } from './CustomInput';

export function CategoryAndCustomInput() {
  console.log(window.innerWidth);

  return (
    <Grid container direction="row" justifyContent="center">
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
        md={3}
        justifyContent="center"
        justifyItems="center"
        alignItems="center"
      >
        <CustomInput />
      </Grid>
    </Grid>
  );
}
