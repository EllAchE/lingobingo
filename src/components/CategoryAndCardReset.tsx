// TODO: this should allow selection from some prechosen categories
import React from 'react';
import { Button, Grid, IconButton, Tooltip } from '@mui/material';
import { CategorySelect } from './CategorySelect';
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsEditing } from '../store/cardSlice';
import HelpIcon from '@mui/icons-material/Help';
import { CustomInput } from './CustomInput';

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
        xs={state.isEditing ? 12 : 6}
        justifyContent={state.isEditing ? 'center' : 'flex-start'}
        justifyItems="center"
        alignItems="center"
        sx={!state.isEditing ? { paddingLeft: 1 } : { height: '100%' }}
      >
        {/* {state.isEditing && (
          <>
            <CustomInput />
            <Tooltip title="Type in comma-separated phrases for each square & press submit when done.">
              <HelpIcon sx={{ color: 'gray' }} />
            </Tooltip>
          </>
        )} */}

        <Button
          variant={'contained'}
          onClick={() => {
            dis(toggleIsEditing(undefined));
          }}
          sx={{ marginLeft: 2 }}
        >
          {state.isEditing ? 'Cancel Creation' : 'Create Bingo!'}
        </Button>
        <Tooltip
          title={
            state.isEditing
              ? 'Type the text you want to create inside the bingo card squares!'
              : 'Type the text you want to create inside the bingo card squares!'
          }
        >
          <HelpIcon sx={{ color: 'gray' }} />
        </Tooltip>
      </Grid>
    </Grid>
  );
}
