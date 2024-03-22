import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Currency } from '@/shared/enums';
import { getBrowserLanguage, LanguageKey } from '@/shared/i18n/i18n';

type ProfileState = {
  language: LanguageKey;
  currency: Currency;
};

const initialState: ProfileState = {
  language: getBrowserLanguage(),
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
