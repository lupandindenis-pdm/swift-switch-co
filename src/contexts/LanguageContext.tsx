
import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, Language } from "@/lib/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem("language");
      if (stored === "ru" || stored === "en") return stored;

      const browserLang = navigator.language?.toLowerCase() ?? "";
      return browserLang.startsWith("ru") ? "ru" : "en";
    } catch {
      return "ru";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("language", language);
    } catch {}
  }, [language]);

  const t = (path: string) => {
    const keys = path.split(".");
    let current: any = translations[language];

    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation missing for key: ${path}`);
        return path;
      }
      current = current[key];
    }

    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
