import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState(Cookies.get("language") || "in");
  const [languageView, setLanguageView] = useState("in");

  useEffect(() => {
    setLanguage(Cookies.get("language") || "in");

    // Ensure this code is run only on client side
    if (typeof window !== "undefined" && language !== null) {
      const url = new URL(window.location.href);
      const langQueryParam = url.searchParams.get("lang");
      setLanguageView(langQueryParam || "in");

      // If language is not 'in' or query lang is not equal to language then redirect
      if (language !== "in" && langQueryParam !== language) {
        url.searchParams.set("lang", language);
        window.location.href = url.toString();
      }

      if (language === "in" && langQueryParam) {
        const urlWithoutLangParam = window.location.href.replace(
          /(\?|&)lang=[^&]+/,
          ""
        );
        window.location.href = urlWithoutLangParam;
      }
    }
  }, [language]);

  const handleLanguageSwitch = (p0: string) => {
    const newLanguage = language === "in" ? "en" : "in";
    setLanguage(newLanguage);
    Cookies.set("language", newLanguage);
    setLanguageView(newLanguage);
  };

  // do not render anything until after hydration
  if (language === null) {
    return null;
  }

  return (
    <div className="flex overflow-hidden">
      {languageView === "en" && (
        <div
          className="flex align-middle px-3 py-1 shadow-md rounded-3xl bg-[#24AD69] text-white"
          onClick={() => handleLanguageSwitch("en")}
          style={{ cursor: "pointer", maxWidth: "150px" }}
        >
          <div className="mr-1 text-sm flex align-middle items-center">ENG</div>
          <div className="w-6 h-6  bg-white my-1 rounded-full shadow-xl"></div>
        </div>
      )}
      {languageView === "in" && (
        <div
          className="flex align-middle px-3 py-1 shadow-md rounded-3xl bg-[#24AD69] text-white"
          onClick={() => handleLanguageSwitch("in")}
          style={{ cursor: "pointer", maxWidth: "150px" }}
        >
          <div className="w-6 h-6  bg-white my-1 rounded-full shadow-xl"></div>
          <div className="ml-1 text-sm flex align-middle items-center">IDN</div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
