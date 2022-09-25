// TODO: this should allow selection from some prechosen categories
import React from 'react';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import {
  clearSelections,
  resetCard,
  setCard,
  setCategory,
} from '../store/cardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { presetCategories } from '../constants';
import { createBingoCard } from '../scripts/createGrid';

export default function RandomizeAndReset() {
  const dis = useDispatch();
  const state = useSelector((state: any) => state.card);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="row"
      sx={{ zIndex: 1 }}
    >
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
        sx={{ height: 40, zIndex: 2, marginRight: 2 }}
      >
        Random
      </Button>
      <Button
        onClick={() => {
          dis(clearSelections(undefined));
        }}
        variant={'contained'}
        sx={{ height: 40, zIndex: 2, marginRight: 2 }}
      >
        Reset
      </Button>
      <FormControl sx={{ m: 1, minWidth: 140, zIndex: 2 }} size="small">
        <InputLabel id="demo-select-small">Set Dimensions</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={0}
          label="Set Dimensions"
          onChange={(e) => {
            dis(resetCard(e.target.value));
          }}
        >
          <MenuItem value={3}>3x3</MenuItem>
          <MenuItem value={4}>4x4</MenuItem>
          <MenuItem value={5}>5x5</MenuItem>
        </Select>
      </FormControl>
      {/* <FormControl>
        <InputLabel
          id="ANID"
          style={{
            marginLeft: 10,
            top: '50%',
            transform: 'translate(0,-50%',
          }}
        >
          Set Dimensions
        </InputLabel>
        <Select
          labelId="ANID"
          sx={{ width: 160, height: 40, zIndex: 2 }}
          size="small"
          onChange={(e) => {
            dis(resetCard(e.target.value));
          }}
        >
          <MenuItem value={3}>3x3</MenuItem>
          <MenuItem value={4}>4x4</MenuItem>
          <MenuItem value={5}>5x5</MenuItem>
        </Select>
      </FormControl> */}
    </Grid>
  );
}
