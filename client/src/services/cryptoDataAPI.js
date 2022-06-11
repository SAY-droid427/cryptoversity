import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = process.env.REACT_APP_CRYPTO_API_URL;

const cryptoHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
    'x-rapidapi-key':process.env.REACT_APP_RAPIDAPI_KEY
};

const createRequest = (url) => ({
    url,
    headers :cryptoHeaders
});

export const cryptoAPI = createApi({
    reducerPath:'cryptoAPI',
    baseQuery: fetchBaseQuery({baseURL}),
    endpoints: (builder) => ({
        getCoins: builder.query({
            query: (count) => createRequest(`/coin?limit=${count}`),
        }),

        getCoinDetails : builder.query({
            query:(coinId) => createRequest(`/coin/${coinId}`),
        }),

        getCoinHistory: builder.query({
          query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
        }),
      
        getExchanges: builder.query({
          query: () => createRequest('/exchanges'),


        })
    })
});

export const {useGetCoinsQuery,useGetCoinsDetailsQuery,useGetCoinHistoryQuery,useGetExchangesQuery } = cryptoAPI;
  
