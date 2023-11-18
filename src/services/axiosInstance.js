import axios from "axios";
import { API_BASE_URL } from "../constants/ApiEndPoints";

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: API_BASE_URL, // Set your base URL here
});

// Add a request interceptor to the Axios instance
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
