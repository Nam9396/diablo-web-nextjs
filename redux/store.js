import { configureStore } from "@reduxjs/toolkit";
import  { createWrapper } from "next-redux-wrapper";
import { apiSlice } from "./apiSlice.js";
import { authSlice, authSliceReducer } from "./authSlice.js";

const makeStore = () =>
  configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      [authSlice.name]: authSliceReducer,
    },
    middleware: (gDM) => gDM().concat(apiSlice.middleware),
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
  });

const AppStore = makeStore();
const RootState = AppStore.getState();
const AppDispatch = AppStore.dispatch;

const wrapper = createWrapper(makeStore, { debug: true });

export { makeStore, AppStore, RootState, AppDispatch, wrapper };
