// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Impor file terjemahan yang dibutuhkan
import translationEN from "./locales/en.json";
import translationIN from "./locales/in.json";

// Daftar terjemahan berdasarkan kode bahasa
const resources = {
  en: {
    translation: translationEN,
  },
  in: {
    translation: translationIN,
  },
};

const storedLanguage = localStorage.getItem("language"); // Mengambil bahasa yang tersimpan dari local storage
const defaultLanguage = storedLanguage || "in"; // Jika ada bahasa yang tersimpan, gunakan itu, jika tidak, gunakan bahasa default "in"

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  fallbackLng: "en", // Bahasa fallback jika terjemahan tidak tersedia
  interpolation: {
    escapeValue: false, // Jangan melakukan escaping karakter
  },
});

export default i18n;
