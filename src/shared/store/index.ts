import { configureStore } from '@reduxjs/toolkit';

import { payerReducer } from './payer/payer-slice';
import { billReducer } from './bill/bill-slice';
import { serviceReducer } from './service/service-slice';

export const store = configureStore({
  reducer: {
    payers: payerReducer,
    bill: billReducer,
    services: serviceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
