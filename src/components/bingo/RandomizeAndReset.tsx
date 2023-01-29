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
import {
  clearSelections,
  resetCard,
  setCard,
  setCategory,
} from '../../store/cardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { createBingoCard } from '../../scripts/createGrid';

export default function RandomizeAndReset() {
  const dis = useDispatch();
  const state = useSelector((state: any) => state.card);

  const [dims, setDims] = React.useState(state.dims);

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
              createBingoCard(
                state.existingCategories[state.category],
                state.dims
              )
            )
          );
          dis(clearSelections(undefined));
        }}
        variant={'contained'}
        sx={{
          height: 40,
          zIndex: 2,
          marginRight: 2,
          backgroundColor: state.themeColor,
        }}
      >
        Random
      </Button>
      <Button
        onClick={() => {
          dis(clearSelections(undefined));
        }}
        variant={'contained'}
        sx={{
          height: 40,
          zIndex: 2,
          marginRight: 2,
          backgroundColor: state.themeColor,
        }}
      >
        Reset
      </Button>
      <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
        <InputLabel id="demo-select-small">Set Dimensions</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={dims}
          label="Set Dimensions"
          onChange={(e) => {
            dis(resetCard(e.target.value));
            setDims(e.target.value);
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
