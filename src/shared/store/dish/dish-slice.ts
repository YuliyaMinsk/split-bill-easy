import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Dish } from '@/shared/types';

const initialState: Dish[] = [];

const dishSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    addDish: (state, action: PayloadAction<Dish>) => {
      state.push(action.payload);
    },
    removeDish: (state, action: PayloadAction<string>) => {
      return state.filter((dish) => dish.id !== action.payload);
    },
    editDish: (state, action: PayloadAction<Dish>) => {
      const index = state.findIndex((dish) => dish.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addDish, removeDish, editDish } = dishSlice.actions;

export const dishReducer = dishSlice.reducer;
