import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Item = {
  id: number;
  tituloItem: string;
  subtituloItem: string;
  urlIconItem: string;
};

type SubCategoriaFooter = {
  id: number;
  items: Item[];
  nombreSubCategoriaFooter: string;
  urlIconSubCategoriaFooter: string;
  href: string;
};

type CategoriaFooters = {
  id: number;
  titleCategoriaFooter: string;
  id_footer: number;
  subcategoriafooters: SubCategoriaFooter[];
  items: Item[];
};

type Footer = {
  id: number;
  titleFooter: string;
  categoriafooters: CategoriaFooters[];
};

/*export const footerApi = createApi({
    reducerPath: 'footerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://backend-rts-institucional.vercel.app/api/',
    }),
    endpoints: (builder) => ({
        getData: builder.query<Footer, null>({
            query: () => 'footer',
        }),
        getFooterById: builder.query<Footer, number>({
            query: (idNavbar) => `footer/${idNavbar}`, 
            // transformResponse: (response: any) => response as Navbar,
            
        }),

    }),
});*/

export const footerApi = createApi({
  reducerPath: "footerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/json/",
  }),
  endpoints: (builder) => ({
    getData: builder.query<Footer, null>({
      query: () => "dataFooter.json",
    }),
    getFooterById: builder.query<Footer | undefined, number>({
      query: () => `dataFooter.json`,
      transformResponse: (response: Footer[], meta, arg) =>
        response.find((footer) => footer.id === arg),
    }),
  }),
});

export const { useGetDataQuery, useGetFooterByIdQuery } = footerApi;
