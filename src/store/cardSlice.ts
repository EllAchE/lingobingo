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
  },
  reducers: {
    setCard: (state, action) => {
      state.card = action.payload;
    },
    modifyPosition: (state, action) => {
      const { position, newPositionValue } = action.payload;
      state.card[position] = newPositionValue;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCard } = cardSlice.actions;

export default cardSlice.reducer;
