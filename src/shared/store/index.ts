import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { billReducer } from './bill/bill-slice';
import { payerReducer } from './payer/payer-slice';
import { profileReducer } from './profile/profile-slice';
import { serviceReducer } from './service/service-slice';

const rootReducer = combineReducers({
  payers: payerReducer,
  bill: billReducer,
  services: serviceReducer,
  profile: profileReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['profile', 'payers', 'bill', 'services'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export { rootReducer, persistor };
