import { createSlice } from '@reduxjs/toolkit';
import { RHYME_SETS, WORD_SET_RANGES } from '../components/rapApp/constants';
import { selectRandomRhymeSet, selectTwoRandom } from '../scripts/rapUtils';

export const rapSlice = createSlice({
  name: 'rap',
  initialState: {
    wordQueue: [['Lingo', 'Bingo']],
    rapping: false,
  },
  reducers: {
    popPushRandomWord: (state, action) => {
      if (state.wordQueue.length < 2) {
        const m = selectRandomRhymeSet(WORD_SET_RANGES) - 1;
        const [wordOne, wordTwo] = selectTwoRandom(RHYME_SETS[m]);
        state.wordQueue.push([wordOne, wordTwo]);
      }
      state.wordQueue.shift();
    },
    addWords: (state, action) => {
      const { wordOne, wordTwo } = action.payload;
      state.wordQueue.push([wordOne, wordTwo]);
    },
    popWords: (state, action) => {
      state.wordQueue.shift();
    },
    setRapping: (state, action) => {
      state.rapping = action.payload;
    },
    overwriteWordQueue: (state, action) => {
      state.wordQueue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRapping, popPushRandomWord, overwriteWordQueue } =
  rapSlice.actions;

export default rapSlice.reducer;
