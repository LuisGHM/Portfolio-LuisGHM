// src/hooks/useLocale.ts
"use client"
import { usePathname } from "next/navigation";

export const useLocale = () => {
  const pathname = usePathname();
  
  // Detecta o idioma baseado na URL
  const locale = pathname.startsWith('/pt') ? 'pt' : 'en';
  
  return locale;
};