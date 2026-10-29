
export type Language = 'ru' | 'lv' | 'en';

export interface Content {
  [key: string]: any;
}

export interface LanguageContent {
  ru: Content;
  lv: Content;
  en: Content;
}
