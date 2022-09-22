import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { createBingoCard } from '../scripts/createGrid';
import extractCategories from '../scripts/extractCategories';
import { useDispatch, useSelector } from 'react-redux';
import { setCard } from '../store/cardSlice';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export function CustomInput() {
  const [userInput, setUserInput] = useState('');
  const dis = useDispatch();
  const state = useSelector((state: any) => state.card);
  return (
    <TextField
      multiline
      maxRows={4}
      size="small"
      sx={{
        borderColor: state.showBingoEffects ? 'white' : 'black',
        color: state.showBingoEffects ? 'white' : 'black',
        width: '80%',
        maxWidth: '300px',
      }}
      label="Create your own!"
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
                  dis(setCard(createBingoCard(cats, state.dims).bingoCard));
                } else {
                  alert(
                    'Invalid input, must be at least 16 semicolon-separated phrases'
                  );
                }
              }}
            >
              <ArrowForwardIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    ></TextField>
  );
}
