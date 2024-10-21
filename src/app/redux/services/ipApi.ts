import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type IpData = {
  ip: string;
};

type ResponseType = {
  message: string;
};

export const ipApi = createApi({
  reducerPath: "ipApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rsl-legales-mu.vercel.app/api/users/ip",
  }),
  endpoints: (builder) => ({
    postIp: builder.mutation<ResponseType, Partial<IpData>>({
      query: (ipData) => ({
        url: "",
        method: "POST",
        body: ipData,
      }),
    }),
  }),
});
console.log("ipApi "+ipApi);

export const { usePostIpMutation } = ipApi;
