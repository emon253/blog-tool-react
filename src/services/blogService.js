import { BLOG_ENDPOINT } from "../constants/ApiEndPoints";
import axiosInstance from "./axiosInstance";

const BlogService = {
  createBlog: async (blogPostData) => {
    try {
      const response = await axiosInstance.post(`${BLOG_ENDPOINT}`, blogPostData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
export default BlogService;
