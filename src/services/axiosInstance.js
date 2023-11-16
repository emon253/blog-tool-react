import axios from "axios";
import { BASE_URL } from "../contants/Const";

const axiosInstance = axios.create({
  baseURL: BASE_URL, // Replace with your API basBe URL
});

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = "localStorage.getItem()"; 

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
