// TODO: this should allow selection from some prechosen categories
import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';

export function CategorySelect({
  setCategory,
  options,
}: {
  setCategory: any;
  options: string[];
}) {
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <Autocomplete
      disablePortal
      value={selectedCategory}
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Category" />}
      onChange={(e: any) => {
        setSelectedCategory(e.target.value);
        setCategory(options[e.target.value]);
      }}
    />
  );
}
