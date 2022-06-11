import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.REACT_APP_CRYPTO_API_URL;

const cryptoHeaders = {
    'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
    'X-RapidAPI-Key':process.env.REACT_APP_RAPIDAPI_KEY
};

const createRequest = (url) => ({ url,headers:cryptoHeaders });

export const cryptoAPI = createApi({
    reducerPath:'cryptoAPI',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (builder) => ({
        getCoins: builder.query({
            query: (count) => createRequest(`?limit=${count}`),
        }),

        getCoinDetails : builder.query({
            query:(coinId) => createRequest(`/coin/${coinId}`),
        }),

        getCoinHistory: builder.query({
          query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
        })
    })
});

export const {useGetCoinsQuery,useGetCoinsDetailsQuery,useGetCoinHistoryQuery } = cryptoAPI;
  
