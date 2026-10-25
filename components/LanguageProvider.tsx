'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Languages } from 'lucide-react';

type Language = 'en' | 'ur';
const LanguageContext = createContext<{ language: Language; toggle: () => void }>({ language: 'en', toggle: () => undefined });
export function LanguageProvider({ children }: { children: React.ReactNode }) { const [language, setLanguage] = useState<Language>('en'); useEffect(() => { const saved = window.localStorage.getItem('online-mandi-language') as Language | null; const next = saved === 'ur' ? 'ur' : 'en'; setLanguage(next); document.documentElement.lang = next; document.documentElement.dir = next === 'ur' ? 'rtl' : 'ltr'; }, []); function toggle() { const next = language === 'en' ? 'ur' : 'en'; setLanguage(next); window.localStorage.setItem('online-mandi-language', next); document.documentElement.lang = next; document.documentElement.dir = next === 'ur' ? 'rtl' : 'ltr'; } return <LanguageContext.Provider value={{ language, toggle }}>{children}</LanguageContext.Provider>; }
export function useLanguage() { return useContext(LanguageContext); }
export function LanguageToggle() { const { language, toggle } = useLanguage(); return <button onClick={toggle} className="language-toggle" type="button" aria-label="Switch language"><Languages size={16} /> {language === 'en' ? 'UR' : 'EN'}</button>; }
