import { createSlice } from "@reduxjs/toolkit";
import { createGallery, deleteGallery, getSingleGallery, updateGallery } from "../thunks/galleryThunk";



const gallerySlice = createSlice({
  name: "galleries",
  initialState: {
    gallery: [],
    singleGallery: null,

    loading: false,
    errorMessage: null,
    successMessage: null,
  },
  reducers: {
    clearMessage: (state) => {
      state.errorMessage = null;
      state.successMessage = null;
    },

  },

  extraReducers: (builder) => {
    // Create Collection
    builder
      .addCase(createGallery.pending, (state) => {
        state.loading = true;
        state.errorMessage = null;
      })
      .addCase(createGallery.fulfilled, (state, action) => {
        state.loading = false,
          state.gallery.unshift(action.payload.data);
        state.successMessage = action.payload.message;
      })
      .addCase(createGallery.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      })
      // Get Single Collection
      .addCase(getSingleGallery.fulfilled, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      })

      // Update Collection
      .addCase(updateGallery.fulfilled, (state, action) => {
        state.loading = false;
        state.gallery = state.gallery.map((item) => item._id === action.payload.data._id ? action.payload.data : item);

        state.successMessage = action.payload.message;
      })

      // Delete Collection
      .addCase(deleteGallery.fulfilled, (state, action) => {
        state.loading = false;
        state.gallery = state.gallery.filter((item) => item._id !== action.payload.data._id);

        state.successMessage = action.payload.message;
      });
  }
},
)

export const { clearMessage } = gallerySlice.actions;
export default gallerySlice.reducer;