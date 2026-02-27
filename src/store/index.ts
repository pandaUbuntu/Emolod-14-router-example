import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './slices/settingsSlice';
import userReducer from './slices/userSlice';
import productsReducer from './slices/productsSlice';

export const store = configureStore({
    reducer: {
        settings: settingsReducer,
        user: userReducer,
        products: productsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
