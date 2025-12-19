// // src/utils/authToken.js

// const TOKEN_KEY = "auth_token";

// export const login = (username, password) => {
//     // ✅ Dummy check (you can replace with your real API later)
//     if (username === "admin" && password === "12345") {
//         localStorage.setItem(TOKEN_KEY, "dummy_token_123456");
//         return true;
//     }
//     return false;
// };

// export const logout = () => {
//     localStorage.removeItem(TOKEN_KEY);
// };

// export const isAuthenticated = () => {
//     return !!localStorage.getItem(TOKEN_KEY);
// };


// src/utils/authToken.js

// src/components/utils/AuthToken.js

const TOKEN_KEY = "token";

// Save token on login
export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

// Remove token on logout
export const logoutToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

// Check if token exists
export const isAuthenticated = () => {
  return Boolean(localStorage.getItem(TOKEN_KEY));
};

// Get stored token
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

