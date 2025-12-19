import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../features/admin/adminSlice"; // ← Use adminSlice, not gallerySlice

export const store = configureStore({
  reducer: {
    admin: adminReducer,
  },
});

export default store;
