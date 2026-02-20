import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { SettingsState, Locale, Theme } from '../../types/settings';

const initialState: SettingsState = {
    locale: 'en',
    theme: 'light'
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setLocale(state, action: PayloadAction<Locale>) {
            state.locale = action.payload;
        },
        setTheme(state, action: PayloadAction<Theme>) {
            state.theme = action.payload;
        }
    }
});

export const { setLocale, setTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
