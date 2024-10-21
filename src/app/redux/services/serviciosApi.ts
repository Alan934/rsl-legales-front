import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Servicios = {
  id: number;
  nombreServicio: string;
  detalleServicio: DetallesServicios[];
};

type DetallesServicios = {
  id: number;
  detalle: string;
};

export const serviciosApi = createApi({
  reducerPath: "serviciosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/json/",
  }),
  endpoints: (builder) => ({
    getServicios: builder.query<Servicios[], void>({
      query: () => "dataServicios.json",
      transformResponse: (response: Servicios[]) => response
    }),
  }),
});

export const {useGetServiciosQuery}=serviciosApi;