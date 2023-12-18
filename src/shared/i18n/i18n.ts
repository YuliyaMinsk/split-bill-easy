import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { store } from '../store';
import { enTranslations } from './en';
import { rusTranslations } from './rus';

const resources = {
  en: enTranslations,
  rus: rusTranslations,
};

type LanguageKey = keyof typeof resources;

const initializeI18n = (): void => {
  const initialLanguage = store.getState().profile.language;

  i18n.use(initReactI18next).init({
    resources,
    lng: initialLanguage,

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

  store.subscribe(() => {
    const currentLanguage = store.getState().profile.language;
    if (i18n.language !== currentLanguage) {
      i18n.changeLanguage(currentLanguage);
    }
  });
};

export { initializeI18n };
export type { LanguageKey };
