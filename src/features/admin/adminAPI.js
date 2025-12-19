export const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const API_URL = `${BASE_URL}/api`;

console.log("API Base URL:", BASE_URL);

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_URL}/auth/login`,
    LOGOUT: `${API_URL}/auth/logout`,
  },
};
