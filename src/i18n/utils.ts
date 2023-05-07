import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang], args?: any[]) {
    const text = ui[lang][key] || ui[defaultLang][key];
    let result = '';

    if (args) {
      if (typeof args[0] === 'number' && args[0] > 0) {
        result = text.replace(/\[([^\]]+)\]/g, '$1');
      } else {
        result = text;
      }

      return result.replace(/\{(\d+)\}/g, (_, i) => args[i]);
    }
    return text;
  }
}
