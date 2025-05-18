import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,  // Allows sending cookies
});

export const setupInterceptors = (navigate) => {
    API.interceptors.request.use(
        (config) => {
          const token = localStorage.getItem("token"); // Get token from local storage
    
          // Exclude login & register routes from adding Authorization header
          if (
            !config.url.includes("/user/register") &&
            !config.url.includes("/user/login") &&
            token
          ) {
            config.headers.Authorization = `Bearer ${token}`;
          }
    
          return config;
        },
        (error) => Promise.reject(error)
    );

    API.interceptors.response.use(
        (response) => response, // If successful, return the response
        (error) => {
            if (error.response && (error.response.status === 403 || error.response.status === 401)) {
            navigate("/signin"); // Redirect to sign-in page
            }
            return Promise.reject(error);
        }
    );

};

export const registerUser = async (userData) => {
    return API.post("/user/register", userData);
};

export const loginUser = async (userData) => {
    return API.post("/user/login", userData);
};

export const getProfile = async (userData) => {
    return API.get("/user/profile", userData);
};

export default API;