import { configureStore } from '@reduxjs/toolkit';
import { cryptoAPI } from '../services/cryptoDataAPI';

export default configureStore({
    reducer: {
        [cryptoAPI.reducerPath]:cryptoAPI.reducer
    }
});
