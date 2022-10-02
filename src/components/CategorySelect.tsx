// TODO: this should allow selection from some prechosen categories
import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { presetCategories } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelections, setCard, setCategory } from '../store/cardSlice';
import { createBingoCard } from '../scripts/createGrid';
import { clearScreenDown } from 'readline';

export function CategorySelect() {
  const dis = useDispatch();
  const state = useSelector((state: any) => state.card);
  const options: string[] = Object.keys(presetCategories);
  options.sort();

  return (
    <Autocomplete
      sx={{ width: '80%', maxWidth: '300px' }}
      disablePortal
      value={state.category}
      options={options}
      size="small"
      renderInput={(params) => (
        <TextField {...params} label="Choose Category" />
      )}
      onChange={(e: any) => {
        if (e.target.innerText) {
          dis(setCategory(e.target.innerText));
          dis(
            setCard(
              //@ts-ignore
              createBingoCard(presetCategories[e.target.innerText], state.dims)
                .bingoCard
            )
          );
          dis(clearSelections(undefined));
        }
      }}
    />
  );
}
