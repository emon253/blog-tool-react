import axiosInstance from "../services/axiosInstance";

export const findAllCategory = async () => {
  const response = await axiosInstance.get(
    "https://fakestoreapi.com/products/categories"
  );
  return response.data;
};
export const findAllCategoryById = async (postId) => {
  const response = await axiosInstance.get(
    "https://fakestoreapi.com/products/"+postId
  );
  return response.data;
};
