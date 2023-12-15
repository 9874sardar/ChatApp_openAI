import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL}),
    endpoints: (builder) => ({
      postAiText: builder.mutation({
        query: (payload) => ({
            url: "openai/text",
            method: "POST",
            body: payload,
        })
      }),
    }),
  })
  export const { usePostAiTextMutation } = pokemonApi;