import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './en/translation.json';
import taTranslation from './ta/translation.json';
import hiTranslation from './hin/translation.json';

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ta: {
        translation: taTranslation,
      },
      hi: {
        translation: hiTranslation,
      },
      // Add more languages here
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values to prevent XSS
    },
  });

export default i18n;
