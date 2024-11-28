"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Language = "fr" | "en";

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: Language;
  switchLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<Language>("fr");

  const switchLanguage = (lang: Language) => {
    setLanguage(lang);
    window.localStorage.setItem("language", lang);
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem("language") as Language | null;
    if (localLanguage) {
      setLanguage(localLanguage);
    } else {
      // Default to French
      setLanguage("fr");
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        switchLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error("useLanguage must be used within a LanguageContextProvider");
  }

  return context;
}