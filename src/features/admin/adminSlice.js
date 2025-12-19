import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../components/api/axiosInstance";
import { setToken, logoutToken, getToken } from "../../components/utils/AuthToken";

// login API
export const loginAdmin = createAsyncThunk(
  "admin/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/login", credentials);
      return response.data; // { admin, token }
    } catch (err) {
      return rejectWithValue(err.response?.data || "Login failed");
    }
  }
);

// Logout API
export const logoutAdmin = createAsyncThunk(
  "admin/logout", 
async (_, { rejectWithValue }) => {
  try {
    const token = getToken();
    if (!token) return rejectWithValue("No Token found !");

    await axiosInstance.post("/auth/logout", {}, {
      headers: { Authorization: `Bearer ${token}`},
    });

    return true;

  } catch (error) {
    return rejectWithValue(error.response?.data || "Logout failed");
  }
}
);

const initialState = {
  admin: null,
  token: localStorage.getItem("token") || null,
  isAuthenticated: Boolean(localStorage.getItem("token")),
  loading: false,
  error: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload.admin;

        const token = action.payload.token || action.payload.accessToken;
        state.token = token;
        state.isAuthenticated = Boolean(token);

        if (token) {
          setToken(token); // Save token in localStorage
        }
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })

      // Logout 
      .addCase(logoutAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutAdmin.fulfilled, (state) => {
        state.loading = false;
        state.admin = null;
        state.token = null;
        state.isAuthenticated = false;

        logoutToken();
      })
      .addCase(logoutAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;

        logoutToken();
      })
  },
});

export const { logout } = adminSlice.actions;
export default adminSlice.reducer;
