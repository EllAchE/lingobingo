import { createSlice } from '@reduxjs/toolkit';
import { emptyCellStates, presetCategories } from '../constants';
import { createBingoCard } from '../scripts/createGrid';

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    card: createBingoCard(presetCategories.Corporate).bingoCard,
    cellStates: [...emptyCellStates],
    isBingo: false,
    showBingoEffects: false,
    fewestRemaining: 4,
    category: 'Corporate',
    exisitingCategories: presetCategories,
  },
  reducers: {
    setState: (state, action) => {
      state.cellStates = action.payload.cellStates;
      state.isBingo = action.payload.isBingo;
      state.fewestRemaining = action.payload.fewestRemaining;
      state.showBingoEffects = action.payload.showBingoEffects;
      state.category = action.payload.category;
      state.card = action.payload.card;
    },
    setCellStates: (state, action) => {
      state.cellStates = action.payload;
    },
    setCard: (state, action) => {
      state.card = action.payload;
    },
    setIsBingo: (state, action) => {
      state.isBingo = action.payload;
    },
    setShowBingoEffects: (state, action) => {
      state.showBingoEffects = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    resetCard: (state, action) => {
      state.fewestRemaining = 4;
      state.isBingo = false;
      state.showBingoEffects = false;
      state.cellStates = [...emptyCellStates];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCellStates,
  setCard,
  setIsBingo,
  setState,
  setShowBingoEffects,
  setCategory,
  resetCard,
} = cardSlice.actions;

export default cardSlice.reducer;
