import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { languageMap } from '../constants/LANGUAGES';

const availableLanguages = Object.keys(languageMap);
let storedLanguage = window.localStorage.getItem('i18nextAlph');

if (!storedLanguage || !availableLanguages.includes(storedLanguage)) {
  storedLanguage = 'en';
  window.localStorage.setItem('i18nextAlph', storedLanguage);
}

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  lng: storedLanguage,
  fallbackLng: 'en',
  debug: false,
  whitelist: availableLanguages,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
