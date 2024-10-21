import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contadorApi = createApi({
  reducerPath: "contadorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rsl-legales-backend.vercel.app/api/users",
  }),
  endpoints: (builder) => ({
    getUsuarios: builder.query<number, void>({
      query: () => "/count",
      transformResponse: (response: number) => response,
    }),
    getContratos: builder.query<number, void>({
      query: () => "/countrecord",
      transformResponse: (response: number) => response,
    }),
    getFirmas: builder.query<number, void>({
      query: () => "/countsignature",
      transformResponse: (response: number) => response,
    }),
  }),
});

export const { useGetUsuariosQuery, useGetContratosQuery, useGetFirmasQuery } =
  contadorApi;
