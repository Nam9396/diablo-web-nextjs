import { USERS_URL } from "../constant.js";
import { apiSlice } from "./apiSlice.js";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST', 
        body: data,
        credentials: "include", 
      }),
    }),
    loginGoogle: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth/google`,
        method: 'POST', 
        body: data,
        credentials: "include", 
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: 'POST', 
        body: data,
      })
    }),
    registerGoogle: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register/google`,
        method: 'POST', 
        body: data,
      })
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST'
      }), 
      // invalidatesTags: ['UserOrder'],
    }), 
    //Admin function
    getAllUsers: builder.query({
      query: () => ({
        url: USERS_URL
      }), 
    }), 
    deleteUserById: builder.mutation({
      query: (id) => ({
        url: `${USERS_URL}/${id}`,
        method: 'DELETE'
      })
    }),
    getUserById: builder.query({
      query: (id) => ({ 
        url: `${USERS_URL}/${id}`, 
      })
    }), 
    updateUserById: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/${data.userId}`, 
        method: 'PUT', 
        body: data, 
      }),
    })
  })
})

export const { 
  useLoginMutation, 
  useLoginGoogleMutation, 
  useRegisterMutation, 
  useRegisterGoogleMutation,
  useLogoutMutation,
} = userApiSlice;