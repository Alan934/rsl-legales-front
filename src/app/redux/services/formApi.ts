import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type FormData = {
  nombreCompleto: string;
  email: string;
  servicioId: number;
  telefono: string;
  mensaje: string;
};

type ResponseType = {
  success: boolean;
  message?: string;
};

export const formApi = createApi({
  reducerPath: "formApi",
  baseQuery: fetchBaseQuery({
    baseUrl: " https://rsl-legales-backend.vercel.app/api/formulario",
  }),
  endpoints: (builder) => ({
    postData: builder.mutation<ResponseType, Partial<FormData>>({
      query: (newFormData) => ({
        url: "",
        method: "POST",
        body: newFormData,
      }),
    }),
  }),
});

export const { usePostDataMutation } = formApi;
