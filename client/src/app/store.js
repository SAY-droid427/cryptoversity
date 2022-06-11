import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { cryptoAPI } from '../services/cryptoDataAPI';
import { cryptoNewsApi } from '../services/cryptoNewsApi';

export default configureStore({
    reducer: {
        [cryptoAPI.reducerPath]:cryptoAPI.reducer,
        [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer,
    }
});
