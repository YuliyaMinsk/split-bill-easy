import { configureStore } from '@reduxjs/toolkit';

import { payerReducer } from './payer/payer-slice';
import { dishReducer } from './dish/dish-slice';

export const store = configureStore({
  reducer: {
    payer: payerReducer,
    dish: dishReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;