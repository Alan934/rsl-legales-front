import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type ServiciosForm = {
  id: number;
  nombreServicio: string;
};

export const ServiciosFormApi = createApi({
  reducerPath: "serviciosFormApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://rsl-legales-backend.vercel.app/api/formulario",
  }),
  endpoints: (builder) => ({
    getServiciosForm: builder.query<ServiciosForm[], void>({
      query: () => "/servicios-requeridos",
      transformResponse: (response: ServiciosForm[]) => response,
    }),
  }),
});

export const {useGetServiciosFormQuery} = ServiciosFormApi;