import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { createBingoCard } from '../scripts/createGrid';
import extractCategories from '../scripts/extractCategories';
import { useDispatch } from 'react-redux';
import { setCard } from '../store/cardSlice';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export function CustomInput() {
  const [userInput, setUserInput] = useState('');
  const dis = useDispatch();
  return (
    <Box>
      <TextField
        fullWidth
        multiline
        maxRows={5}
        label="Create your own card!"
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => {
          setUserInput(e.target.value);
        }}
        value={userInput}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  if (!userInput) {
                    return;
                  }
                  const cats = extractCategories(userInput);
                  if (cats) {
                    dis(setCard(createBingoCard(cats).bingoCard));
                  } else {
                    alert(
                      'Invalid input, must be at least 25 comma-separated phrases'
                    );
                  }
                }}
              >
                <ArrowForwardIcon sx={{ fontSize: 24 }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      ></TextField>
    </Box>
  );
}
