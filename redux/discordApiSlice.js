import { DISCORD_URL } from "../constant.js";
import { apiSlice } from "./apiSlice.js";


export const discordApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (message) => ({
        url: DISCORD_URL,
        method: 'POST', 
        body: message,
      }),
    }),
  })
})

export const { 
  useSendMessageMutation,
} = discordApiSlice;

export const { 
  sendMessage,
} = discordApiSlice.endpoints