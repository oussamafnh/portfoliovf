import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en
    },
    fr: {
      translation: fr
    }
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language if the current language doesn't have translations
  interpolation: {
    escapeValue: false // React already escapes output
  }
});

export default i18n;
