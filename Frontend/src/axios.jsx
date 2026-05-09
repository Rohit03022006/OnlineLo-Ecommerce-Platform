import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL ? `${import.meta.env.VITE_BASE_URL}/api` : "http://localhost:8080/api",
});

// 🔥 AUTO ATTACH TOKEN
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token && token !== "null") {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;
