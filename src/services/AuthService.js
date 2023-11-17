import axios from "axios";
import {
  API_BASE_URL,
  SIGNUP_ENDPOINT,
  LOGIN_ENDPOINT,
} from "../constants/ApiEndPoints";
import { AUTH_TOKEN } from "../constants/Const";
import { jwtDecode } from "jwt-decode";

const AuthService = {
  signup: async (userData) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}${SIGNUP_ENDPOINT}`,
        userData
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  login: async (credentials) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}${LOGIN_ENDPOINT}`,
        credentials
      );
      if (response.data.accessToken) {
        // Store the token in localStorage
        AuthService.setAccessToken(response.data.accessToken);
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  // Function to set the token in localStorage
  setAccessToken: (accessToken) => {
    localStorage.setItem(AUTH_TOKEN, accessToken);
  },

  // Function to get the token from localStorage
  getAccessToken: () => {
    return localStorage.getItem(AUTH_TOKEN);
  },

  // Function to clear the token from localStorage on logout or token expiration
  logout: () => {
    localStorage.removeItem(AUTH_TOKEN);
  },
  // Function to get the username from the JWT token
  getUserNameFromToken: () => {
    const token = localStorage.getItem(AUTH_TOKEN);
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken.sub;
    }
    return null;
  },

  // Function to check if the user is logged in
  isLoggedIn: () => {
    const token = localStorage.getItem(AUTH_TOKEN);
    return !!token; // Returns true if token exists, false otherwise
  },
};

export default AuthService;
