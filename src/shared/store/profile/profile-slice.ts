import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LanguageKey } from '@/shared/i18n/i18n';

type ProfileState = {
  language: LanguageKey;
  currency: string;
};

const initialState: ProfileState = {
  language: 'en',
  currency: 'USD',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<LanguageKey>) => {
      state.language = action.payload;
    },
    changeCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
  },
});

export const { changeLanguage, changeCurrency } = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
