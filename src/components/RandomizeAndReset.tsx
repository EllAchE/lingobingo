// TODO: this should allow selection from some prechosen categories
import React from 'react';
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { resetCard, setCard, setCategory, setDims } from '../store/cardSlice';
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
              createBingoCard(presetCategories[state.category], state.dims)
                .bingoCard
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
          dis(resetCard(state.dims));
        }}
        variant={'contained'}
        sx={{ height: 40, zIndex: 2 }}
      >
        Reset
      </Button>
      <FormControl sx={{ width: 160, marginLeft: 4 }}>
        <InputLabel
          style={{ marginLeft: 10, top: '50%', transform: 'translate(0,-50%' }}
        >
          Set Dimensions
        </InputLabel>
        <Select
          sx={{ height: 40, zIndex: 2 }}
          label="Dimensions"
          size="small"
          onChange={(e) => {
            dis(resetCard(e.target.value));
          }}
        >
          <MenuItem value={3}>3x3</MenuItem>
          <MenuItem value={4}>4x4</MenuItem>
          <MenuItem value={5}>5x5</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
}
