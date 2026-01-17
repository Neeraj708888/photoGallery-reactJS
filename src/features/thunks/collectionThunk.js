
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../components/api/axiosInstance";


// Create Collection Thunk-Api 
export const createCollections = createAsyncThunk("collection/create", async (formData, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post("/collections/create", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log("Create Collection Thunk Response: ", response.data);

        return response.data;

    } catch (error) {

        return rejectWithValue(error.response?.data?.message || "Internal error in collection create");

    }
});

// Update Collection Thunk-Api
export const updateCollections = createAsyncThunk("collections/update", async ({ id, formData }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.put(`/collections/update/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
        });
        console.log("Update Collection Thunk Response: ", response.data);

        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Internal error in update collection");
    }
});

// Delete Collection Think-Api
export const deleteCollections = createAsyncThunk("collections/delete", async (id, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.delete(`/collections/delete/${id}`);
        console.log(`Deleted Collection Thunk Response: , ${id}, ${response}`);

        return { id, ...response.data };

    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Internal error in delete collection");
    }
});

// Get All Collection Thunk-Api 
export const getAllcollections = createAsyncThunk("collections", async (_, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get("/collections");
        console.log("All Collection Thunk Response: ", response.data);

        return response.data;

    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Internal error in fetch collection");
    }
});

// Get Single Collection Thunk-Api
export const getSingleCollection = createAsyncThunk("single/collection", async (id, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get(`/collections/${id}`);
        console.log("Single Collection Thunk Response: ", response.data.data);

        return response.data.data;

    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Internal error in fetch single collection");
    }
});

// Toggle Status Collection
export const toggleCollectionStatus = createAsyncThunk("status/collection", async ({ id, status }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.patch(`/collections/status/${id}`, { status });
        console.log("Collection Thunk Toggle Response: ", response.data);

        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Internal error in toggle collection status");
    }
});





/* GET ALL */
// export const getAllcollections = createAsyncThunk(
//     "collection/getAll",
//     async () => (await axiosInstance.get("/collections")).data.data
// );

/* CREATE */
// export const createCollections = createAsyncThunk(
//     "collection/create",
//     async (payload) => (await axiosInstance.post("/collections", payload)).data.data
// );

/* UPDATE */
// export const updateCollections = createAsyncThunk(
//     "collection/update",
//     async ({ id, ...data }) =>
//         (await axiosInstance.put(`/collections/${id}`, data)).data.data
// );

/* DELETE */
// export const deleteCollection = createAsyncThunk(
//     "collection/delete",
//     async (id) => id && (await axiosInstance.delete(`/collections/${id}`), id)
// );

/* STATUS TOGGLE */
// export const toggleCollectionStatus = createAsyncThunk(
//     "collection/status",
//     async (id) =>
//         (await axiosInstance.patch(`/collections/status/${id}`)).data.data
// );



