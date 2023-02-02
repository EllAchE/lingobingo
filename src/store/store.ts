import { configureStore } from '@reduxjs/toolkit';

import cardReducer from './cardSlice';
import rapReducer from './rapSlice';

export default configureStore({
  reducer: {
    card: cardReducer,
    rap: rapReducer,
  },
});

/**
 * Usage:
 * const dis = useDispatch();
 * dis(valueSetFunction(buttonText));
 * const state = useSelector((state: any) => state.identifier);
 */
