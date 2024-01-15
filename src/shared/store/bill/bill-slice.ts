import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Bill, BillLine } from '@/shared/types';

type BillState = {
  billList: Bill;
  editingBillLine: BillLine | null;
};

const initialState: BillState = {
  billList: [],
  editingBillLine: null,
};

const billSlice = createSlice({
  name: 'bill',
  initialState,
  reducers: {
    addBillLine: (state, action: PayloadAction<BillLine>) => {
      state.billList.push(action.payload);
    },
    removeBillLine: (state, action: PayloadAction<string>) => {
      const dishIdToRemove = action.payload;
      const index = state.billList.findIndex((billLine) => billLine.dish.id === dishIdToRemove);
      if (index !== -1) {
        state.billList.splice(index, 1);
      }
    },
    editBillLine: (state, action: PayloadAction<{ index: number; newBillLine: BillLine }>) => {
      const { index, newBillLine } = action.payload;
      if (index >= 0 && index < state.billList.length) {
        state.billList[index] = newBillLine;
      }
    },
    setEditingBillLine: (state, action: PayloadAction<BillLine | null>) => {
      state.editingBillLine = action.payload;
    },
    clearBill: (state) => {
      state.billList = initialState.billList;
      state.editingBillLine = initialState.editingBillLine;
    },
  },
});

export const { addBillLine, removeBillLine, editBillLine, setEditingBillLine, clearBill } = billSlice.actions;

export const billReducer = billSlice.reducer;
