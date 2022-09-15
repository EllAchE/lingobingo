import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { createBingoCard } from '../scripts/createGrid';
import extractCategories from '../scripts/extractCategories';

export function CustomInput({ setBingoCard }: { setBingoCard: any }) {
  const [userInput, setUserInput] = useState('');
  return (
    <Box>
      <TextField
        fullWidth
        multiline
        maxRows={5}
        label="Create your own card!"
        sx={{ marginTop: 2 }}
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => {
          setUserInput(e.target.value);
        }}
        value={userInput}
      ></TextField>
      <Button
        onClick={() => {
          if (!userInput) {
            return;
          }

          const cats = extractCategories(userInput);
          if (cats) {
            setBingoCard(createBingoCard(cats).bingoCard);
          } else {
            alert('Invalid input, must be at least 25 comma-separated phrases');
          }
        }}
      >
        Submit
      </Button>
    </Box>
  );
}
