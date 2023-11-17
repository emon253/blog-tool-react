import axiosInstance from "../services/axiosInstance";

const BASE_URL = "localhost:8080"
export const findAllPosts = () => {
  return axiosInstance
    .get('https://fakestoreapi.com/products/')
    .then((response) => response.data);


};

export const createBlogPost = async (blogPost)=>{
  const response = await axiosInstance.post(BASE_URL + '//api/blogposts');
  return response;
}