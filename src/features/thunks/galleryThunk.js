import { createAsyncThunk } from "@reduxjs/toolkit";


// Create Gallery Thunk-Api 
export const createGallery = createAsyncThunk("gallery/create", async (payload, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post("/gallery/create", payload);

        return response.data;

    } catch (error) {

        return rejectWithValue(error.response?.data?.message || "Internal error in collection create");

    }
});

// Update Gallery Thunk-Api
export const updateGallery = createAsyncThunk("gallery/update", async ({ id, payload }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.put(`/gallery/update/${id}`, payload);

        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Internal error in update gallery");
    }
});

// Delete Gallery Think-Api
export const deleteGallery = createAsyncThunk("gallery/delete", async (id, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.delete(`/gallery/delete${id}`);

        return response.data;

    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Internal error in delete gallery");
    }
});

// Get All Gallery Thunk-Api 
export const gallery = createAsyncThunk("gallery", async (_, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get("/gallery");
        return response.data;

    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Internal error in fetch gallery");
    }
});

// Get Single Gallery Thunk-Api
export const getSingleGallery = createAsyncThunk("single/gallery", async (id, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get(`/gallery/${id}`);
        return response.data;

    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Internal error in fetch single gallery");
    }
});


