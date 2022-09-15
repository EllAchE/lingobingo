import { TextField } from '@mui/material';
import React, { FormEvent } from 'react';
import { createBingoCard } from '../scripts/createGrid';
import extractCategories from '../scripts/extractCategories';

export function CustomInput({ setWordGrid }: { setWordGrid: any }) {
  return (
    <TextField
      label="Create your own!"
      sx={{ marginTop: 2 }}
      onSubmit={(e: FormEvent<HTMLDivElement>) => {
        // console.dir('e.target');
        // console.dir(e.target);
        const cats = extractCategories('a');
        if (cats) {
          setWordGrid(createBingoCard(cats).bingoCard);
        } else {
          console.warn(
            'Invalid input, must be at least 25 comma separated words'
          );
        }
      }}
    ></TextField>
  );
}
