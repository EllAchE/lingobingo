import { createSlice } from '@reduxjs/toolkit';
import { EMPTY_CELL_STATES, PRESET_CATEGORIES } from '../constants';
import { RHYME_SETS, WORD_SET_RANGES } from '../components/rapApp/constants';
import { createBingoCard } from '../scripts/createGrid';
import { selectRandomRhymeSet, selectTwoRandom } from '../scripts/rapUtils';

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    card: createBingoCard(PRESET_CATEGORIES.Corporate, 4),
    cellStates: [...EMPTY_CELL_STATES],
    isBingo: false,
    isEditing: false,
    themeColor: '#db77d6',
    showBingoEffects: false,
    fewestRemaining: 4,
    category: undefined,
    existingCategories: PRESET_CATEGORIES, // For future support of persistence of cats locally
    dims: 4,
    editorFreeParking: [undefined, undefined],
    wordOne: 'Lingo',
    wordTwo: 'Bingo',
    rapping: false,
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
      state.themeColor = action.payload?.themeColor ?? '#3252a8';
    },
    resetCard: (state, action) => {
      state.fewestRemaining = action.payload;
      state.isBingo = false;
      state.showBingoEffects = false;
      state.cellStates = [...EMPTY_CELL_STATES];
      state.card = createBingoCard(
        state.existingCategories[state.category],
        action.payload
      );
      state.dims = action.payload;
    },
    setDims: (state, action) => {
      state.dims = action.payload;
    },
    setFewestRemaining: (state, action) => {
      state.fewestRemaining = action.payload;
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
      temp[action.payload.categoryName] = action.payload.category;
      state.existingCategories = temp;
    },
    setEditorFreeParking: (state, action) => {
      state.editorFreeParking = action.payload;
    },
    changeWords: (state, action) => {
      const m = selectRandomRhymeSet(WORD_SET_RANGES) - 1;
      const [wordOne, wordTwo] = selectTwoRandom(RHYME_SETS[m]);
      state.wordOne = wordOne;
      state.wordTwo = wordTwo;
    },
    setRapping: (state, action) => {
      state.rapping = action.payload;
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
  setFewestRemaining,
  toggleIsEditing,
  clearSelections,
  addCategory,
  setEditorFreeParking,
  setRapping,
  changeWords,
} = cardSlice.actions;

export default cardSlice.reducer;
