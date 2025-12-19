import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 🔹 Step 1: Dummy API call using createAsyncThunk
export const fetchPhotos = createAsyncThunk("gallery/fetchPhotos", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=5");
  return response.data; // returns an array of photo objects
});

// 🔹 Step 2: Define the initial state
const initialState = {
  photos: [],
  loading: false,
  error: null,
};

const gallerySlice = createSlice({
    name: "gallery",
    initialState,
    reducers: {
clearPhotos: (state) => {
    state.photos = [];
}
    },

extraReducers: (builder) => {
builder
      .addCase(fetchPhotos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.loading = false;
        state.photos = action.payload;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
}
});

// 🔹 Step 4: Export actions & reducer
export const { clearPhotos } = gallerySlice.actions;
export default gallerySlice.reducer;