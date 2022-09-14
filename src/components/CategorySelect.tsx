// TODO: this should allow selection from some prechosen categories
import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { presetCategories } from './presetCategories';

export function CategorySelect({
  category,
  setCategory,
}: {
  category: string;
  setCategory: any;
}) {
  const options = Object.keys(presetCategories);

  return (
    <Autocomplete
      disablePortal
      value={category}
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Category" />}
      onChange={(e: any) => {
        console.dir('e');
        console.dir(e);
        setCategory(e.target.innerText);
      }}
    />
  );
}
