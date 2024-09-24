import axios, { AxiosInstance, AxiosError } from "axios";
import { config } from "../config";
const DEFAULT_BASE_URL = config.baseUrl; // Default base URL

const api: AxiosInstance = axios.create({
  baseURL: DEFAULT_BASE_URL,
});

// Request interceptor to add access token
// api.interceptors.request.use(
//   async (config) => {
//     const token = getAccessToken();
//     if (token && isTokenExpired(token)) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//       const newAccessToken = await refreshAccessToken();
//       config.headers["Authorization"] = `Bearer ${newAccessToken}`;
//     } else if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Response interceptor to handle errors
// api.interceptors.response.use(
//   (response) => response,
//   (error: AxiosError) => {
//     const status = error.response?.status;
//
//     if (status === 401) {
//       return Promise.reject(
//         new Error("Unauthorized access. Please log in again.")
//       );
//     } else if (status === 403) {
//       return Promise.reject(new Error("Forbidden access."));
//     } else if (status && status >= 400 && status < 500) {
//       return Promise.reject(error.response?.data);
//     } else if (status && status >= 500) {
//       return Promise.reject(new Error("Server error. Please try again later."));
//     }
//     return Promise.reject(error);
//   }
// );

// Function to fetch data
// export const fetchData = async <T>(
//   endpoint: string,
//   params?: string
// ): Promise<T> => {
//   const response = await api.get<T>(endpoint + params);
//   return response.data;
// };
//
// // Function to post data (e.g., for login)
// export const postData = async <T>(endpoint: string, data: any): Promise<T> => {
//   const response = await api.post<T>(endpoint, data);
//   return response.data;
// };
//
// export const updateData = async <T>(
//   endpoint: string,
//   data: any,
//   params?: string
// ): Promise<T> => {
//   const response = await api.put<T>(endpoint + params, data);
//   return response.data;
// };

export default api;
