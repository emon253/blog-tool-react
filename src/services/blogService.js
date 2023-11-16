import axiosInstance from "../services/axiosInstance";

export const findAllPosts = () => {
  return axiosInstance
    .get('https://fakestoreapi.com/products/')
    .then((response) => response.data);
};
