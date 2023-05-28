import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Payer } from '@/shared/types';
import { payersFake } from '@/shared/constants';

const initialState: Payer[] = payersFake;

const payerSlice = createSlice({
  name: 'payers',
  initialState,
  reducers: {
    addPayer: (state, action: PayloadAction<Payer>) => {
      state.push(action.payload);
    },
    removePayer: (state, action: PayloadAction<string>) => {
      return state.filter((payer) => payer.id !== action.payload);
    },
    editPayer: (state, action: PayloadAction<Payer>) => {
      const index = state.findIndex((payer) => payer.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addPayer, removePayer, editPayer } = payerSlice.actions;

export const payerReducer = payerSlice.reducer;
