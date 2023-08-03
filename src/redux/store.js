import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
import cartReducer from "./reducers/cartReducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
