import { createSlice } from '@reduxjs/toolkit';

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    card: [
      { isClicked: false },
      { isClicked: false },
      { isClicked: false },
      { isClicked: false },
      { isClicked: false },
      { isClicked: false },
      { isClicked: false },
      { isClicked: false },
      { isClicked: false },
      { isClicked: false },
      { isClicked: false },
      { isClicked: false },
      { isClicked: false },
      { isClicked: false },
      { isClicked: false },
      { isClicked: false },
      { isClicked: false },
      { isClicked: false },
      { isClicked: false },
      { isClicked: false },
      { isClicked: false },
      { isClicked: false },
      { isClicked: false },
      { isClicked: false },
      { isClicked: false },
    ],
    isBingo: false,
    fewestRemaining: 5,
  },
  reducers: {
    setState: (state, action) => {
      state.card = action.payload.card;
      state.isBingo = action.payload.isBingo;
      state.fewestRemaining = action.payload.fewestRemaining;
    },
    setCard: (state, action) => {
      state.card = action.payload;
    },
    setIsBingo: (state, action) => {
      state.isBingo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCard, setIsBingo, setState } = cardSlice.actions;

export default cardSlice.reducer;
