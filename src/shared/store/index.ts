import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { payerReducer } from './payer/payer-slice';
import { billReducer } from './bill/bill-slice';
import { serviceReducer } from './service/service-slice';
import { profileReducer } from './profile/profile-slice';

const rootReducer = combineReducers({
  payers: payerReducer,
  bill: billReducer,
  services: serviceReducer,
  profile: profileReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { rootReducer };
