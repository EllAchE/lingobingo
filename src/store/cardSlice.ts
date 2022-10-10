import { createSlice } from '@reduxjs/toolkit';
import { emptyCellStates, presetCategories } from '../constants';
import { createBingoCard } from '../scripts/createGrid';

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    card: createBingoCard(presetCategories.Corporate, 4).bingoCard,
    cellStates: [...emptyCellStates],
    isBingo: false,
    isEditing: false,
    showBingoEffects: false,
    fewestRemaining: 4,
    category: 'Corporate',
    existingCategories: presetCategories, // For future support of persistence of cats locally
    dims: 4,
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
      state.fewestRemaining = action.payload;
      state.isBingo = false;
      state.showBingoEffects = false;
      state.cellStates = [...emptyCellStates];
      state.category = 'Corporate';
      state.card = createBingoCard(
        presetCategories.Corporate,
        action.payload
      ).bingoCard;
      state.dims = action.payload;
    },
    setDims: (state, action) => {
      state.dims = action.payload;
    },
    toggleIsEditing: (state, action) => {
      state.isEditing = !state.isEditing;
    },
    clearSelections: (state, action) => {
      state.isBingo = false;
      state.showBingoEffects = false;
      state.cellStates = state.cellStates.map((st) => {
        st.isClicked = false;
        return st;
      });
    },
    addCategory: (state, action) => {
      const temp = { ...state.existingCategories };
      //@ts-ignore
      temp[action.payload.categoryName] = action.payload.category;
      state.existingCategories = temp;
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
  setDims,
  toggleIsEditing,
  clearSelections,
  addCategory,
} = cardSlice.actions;

export default cardSlice.reducer;
