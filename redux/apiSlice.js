import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constant.js";
import { HYDRATE } from "next-redux-wrapper";


const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: 'include',
})

const apiSlice = createApi({
  baseQuery,
  // extractRehydrationInfo(action, { reducerPath }) {
  //   if (action.type === HYDRATE) {
  //     return action.payload[reducerPath];
  //   }
  // },
  tagTypes: [],
  endpoints: (builder) => ({
    
  }),
  keepUnusedDataFor: 2 * 60 * 60 *1000,
});

// Export hooks for usage in functional components
const {
//   useGetPokemonByNameQuery,
//   useGetPokemonListQuery,
  util: { getRunningQueriesThunk },
} = apiSlice;

// export endpoints for use in SSR
// const { getPokemonByName, getPokemonList } = pokemonApi.endpoints;

export {
  apiSlice,
  getRunningQueriesThunk,
//   getPokemonByName,
//   getPokemonList,
};
