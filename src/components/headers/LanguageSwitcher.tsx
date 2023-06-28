import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "in");

  const handleLanguageSwitch = () => {
    const newLanguage = language === "in" ? "en" : "in";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage); // Menyimpan bahasa yang dipilih ke dalam local storage
  };

  return (
    <div className="flex overflow-hidden">
      <div
        className={`px-3 py-1 shadow-md rounded-l-3xl ${
          language === "en" ? "bg-green-800 text-white" : "bg-slate-200 text-green-800"
        }`}
        onClick={handleLanguageSwitch}
        style={{ cursor: "pointer", maxWidth: "150px" }} // Menambahkan cursor pointer dan set max-width
      >
        EN
      </div>
      <div
        className={`px-3 py-1 shadow-md rounded-r-3xl ${
          language === "in" ? "bg-green-800 text-white" : "bg-slate-200 text-green-800"
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
