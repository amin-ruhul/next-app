import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export const makeStore = () =>
  configureStore({
    reducer: {
      user: userReducer,
    },
  });

export const wrapper = createWrapper(makeStore);
