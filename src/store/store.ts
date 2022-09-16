import { configureStore } from '@reduxjs/toolkit';

import cardReducer from './cardSlice';

export default configureStore({
  reducer: {
    card: cardReducer,
  },
});

/**
 * Usage:
 * const dis = useDispatch();
 * dis(valueSetFunction(buttonText));
 * const state = useSelector((state: any) => state.identifier);
 */
