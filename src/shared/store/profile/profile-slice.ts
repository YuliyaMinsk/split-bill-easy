import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LanguageKey } from '@/shared/i18n/i18n';
import { Currency } from '@/shared/constants';

type ProfileState = {
  language: LanguageKey;
  currency: Currency;
};

const initialState: ProfileState = {
  language: 'en',
  currency: Currency.KZT,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<LanguageKey>) => {
      state.language = action.payload;
    },
    changeCurrency: (state, action: PayloadAction<Currency>) => {
      state.currency = action.payload;
    },
  },
});

export const { changeLanguage, changeCurrency } = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
