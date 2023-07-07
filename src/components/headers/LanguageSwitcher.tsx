import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState(Cookies.get('language') || "in");
  const [languageView, setLanguageView] = useState("in");

  useEffect(() => {
    
    setLanguage(Cookies.get('language') || "in");

    // Ensure this code is run only on client side
    if (typeof window !== 'undefined' && language !== null) {
      const url = new URL(window.location.href);
      const langQueryParam = url.searchParams.get('lang');
      setLanguageView(langQueryParam || "in");

      // If language is not 'in' or query lang is not equal to language then redirect
      if (language !== 'in' && langQueryParam !== language) {
        url.searchParams.set('lang', language);
        window.location.href = url.toString();
      }

      if (language === 'in' && langQueryParam) {
        const urlWithoutLangParam = window.location.href.replace(/(\?|&)lang=[^&]+/, '');
        window.location.href = urlWithoutLangParam;
      }
      
    }
  }, [language]);

  const handleLanguageSwitch = () => {
    const newLanguage = language === "in" ? "en" : "in";
    setLanguage(newLanguage);
    Cookies.set('language', newLanguage);
    setLanguageView(newLanguage);
  };

  // do not render anything until after hydration
  if (language === null) {
    return null;
  }

  return (
    <div className="flex overflow-hidden">
      <div
        className={`px-3 py-1 shadow-md rounded-l-3xl ${
          languageView === "en" ? "bg-green-800 text-white" : "bg-slate-200 text-green-800"
        }`}
        onClick={handleLanguageSwitch}
        style={{ cursor: "pointer", maxWidth: "150px" }} // Menambahkan cursor pointer dan set max-width
      >
        EN
      </div>
      <div
        className={`px-3 py-1 shadow-md rounded-r-3xl ${
          languageView === "in" ? "bg-green-800 text-white" : "bg-slate-200 text-green-800"
        }`}
        onClick={handleLanguageSwitch}
        style={{ cursor: "pointer", maxWidth: "150px" }} // Menambahkan cursor pointer dan set max-width
      >
        IN
      </div>
    </div>
  );
};

export default LanguageSwitcher;