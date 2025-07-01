import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE } from '@/services/api/api';

export const homeApiSlice = createApi({
  reducerPath: 'get',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE
  }),
  endpoints: (builder) => ({
    getHomePage: builder.query<any, void>({
      query: () => 'home',
    }),
  }),
});

export const { useGetHomePageQuery } = homeApiSlice;
