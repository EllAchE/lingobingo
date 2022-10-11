// TODO: this should allow selection from some prechosen categories
import React from 'react';
import { Button, Grid } from '@mui/material';
import { CategorySelect } from './CategorySelect';
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsEditing } from '../store/cardSlice';

export function CategoryAndCustomInput() {
  const dis = useDispatch();
  const state = useSelector((state: any) => state.card);

  return (
    <Grid container direction="row" justifyContent="center" spacing={1}>
      {!state.isEditing && (
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
      )}
      <Grid
        container
        xs={6}
        justifyContent={state.isEditing ? 'center' : 'flex-start'}
        justifyItems="center"
        alignItems="center"
        sx={!state.isEditing ? { paddingLeft: 1 } : { height: '100%' }}
      >
        {/* <CustomInput /> */}
        <Button
          variant={'contained'}
          onClick={() => {
            dis(toggleIsEditing(undefined));
          }}
        >
          {state.isEditing ? 'Cancel Creation' : 'Create Your Own!'}
        </Button>
      </Grid>
    </Grid>
  );
}
