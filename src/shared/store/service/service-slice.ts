import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Service } from '@/shared/types';
import { SERVICE_NAMES } from '@/shared/constants';

const initialState: Service[] = SERVICE_NAMES.map((service, index) => ({
  id: String(index),
  name: service.name,
  value: 0,
}));

const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    updateServices: (state, action: PayloadAction<Service>) => {
      const index = state.findIndex((service) => service.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { updateServices } = serviceSlice.actions;

export const serviceReducer = serviceSlice.reducer;
