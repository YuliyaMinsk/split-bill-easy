import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { SERVICE_FEE_ADJUSTMENTS } from '@/shared/constants';
import { Service } from '@/shared/types';

const initialState: Service[] = SERVICE_FEE_ADJUSTMENTS.map(({ name, type }, index) => ({
  id: String(index),
  name: name,
  type: type,
  feeType: 'percentage',
  value: 0,
}));

const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    updateServices: (state, action: PayloadAction<Service>) => {
      const index = state.findIndex((service) => service.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    clearServices: () => initialState,
  },
});

export const { updateServices, clearServices } = serviceSlice.actions;

export const serviceReducer = serviceSlice.reducer;
