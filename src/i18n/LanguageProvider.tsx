import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang, type TranslationKey } from "./translations";

const STORAGE_KEY = "site-lang";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with "cs" on first render to keep SSR and first client render
  // identical (avoids hydration mismatches). We hydrate the saved value after mount.
  const [lang, setLangState] = useState<Lang>("cs");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "cs" || saved === "de") {
        setLangState(saved);
        document.documentElement.lang = saved;
        return;
      }
      const nav = navigator.language?.toLowerCase() ?? "";
      const detected: Lang = nav.startsWith("de") ? "de" : "cs";
      setLangState(detected);
      document.documentElement.lang = detected;
    } catch {
      /* ignore */
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.lang = l;
    } catch {
      /* ignore */
    }
  };

  const t = (key: TranslationKey): string => {
    const dict = translations[lang] as Record<string, string>;
    return dict[key] ?? translations.cs[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
