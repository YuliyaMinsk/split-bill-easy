import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Bill, BillLine } from '@/shared/types';

type EditBillPayload = {
  index: number;
  newBillLine: BillLine;
};

const initialState: Bill = [];

const billSlice = createSlice({
  name: 'bill',
  initialState,
  reducers: {
    addBillLine: (state, action: PayloadAction<BillLine>) => {
      state.push(action.payload);
    },
    removeBillLine: (state, action: PayloadAction<number>) => {
      if (action.payload < state.length) {
        state.splice(action.payload, 1);
      }
    },
    editBillLine: (state, action: PayloadAction<EditBillPayload>) => {
      const { index, newBillLine } = action.payload;
      if (index >= 0 && index < state.length) {
        state[index] = newBillLine;
      }
    },
  },
});

export const { addBillLine, removeBillLine, editBillLine } = billSlice.actions;

export const billReducer = billSlice.reducer;
