import { configureStore } from '@reduxjs/toolkit';
import { Store } from 'redux';

import { rootReducer } from '../store';

const createTestStore = (initialState?: Record<string, unknown>): Store => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });

  return store;
};

export { createTestStore };
