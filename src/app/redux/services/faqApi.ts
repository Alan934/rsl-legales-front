import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
type Faq={
    id:number;
    pregunta:string;
    respuesta:string;
    respuestaLista:respuestaList[]
}
type respuestaList={
    id:number;
    respuesta:string;
}

export const faqApi=createApi({
    reducerPath:"faqApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"/json/",
    }),
    endpoints: (builder)=>({
        getDataFaq: builder.query<Faq[],void>({
           query: ()=>"dataFaq.json",
           transformResponse:(response:Faq[])=>response 
        }),
    }),
});

export const {useGetDataFaqQuery}=faqApi;