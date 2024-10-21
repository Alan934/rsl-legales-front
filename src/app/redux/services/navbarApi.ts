import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Item = {
    id: number;
    nombre: string;
    subtitulo: string;
    urlIconItem: string;
    href:string
};

export const navbarApi = createApi({
    reducerPath: 'dataNavbar',
    baseQuery: fetchBaseQuery({
        baseUrl: '/json/',
    }),
    endpoints: (builder) => ({
        getData: builder.query<Item[], null>({
            query: () => 'dataNavbar.json',
        }),
    }),
});

export const { useGetDataQuery } = navbarApi;
