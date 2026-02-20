export type Locale = 'en' | 'ua';
export type Theme = 'light' | 'dark';

export interface SettingsState {
    locale: Locale;
    theme: Theme;
}
