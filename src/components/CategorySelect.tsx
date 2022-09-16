// TODO: this should allow selection from some prechosen categories
import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { presetCategories } from '../scripts/presetCategories';

export function CategorySelect({
  category,
  setCategory,
}: {
  category: string;
  setCategory: any;
}) {
  const options: string[] = Object.keys(presetCategories);
  options.sort();

  return (
    <Autocomplete
      sx={{ maxWidth: 195 }}
      disablePortal
      value={category}
      options={options}
      renderInput={(params) => (
        <TextField {...params} label="Choose Category" />
      )}
      onChange={(e: any) => {
        if (e.target.innerText) {
          setCategory(e.target.innerText);
        }
      }}
    />
  );
}
