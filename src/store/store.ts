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
 * const cardState = useSelector((state: any) => state.card.card);
 */
