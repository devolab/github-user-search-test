import axios, { AxiosInstance } from 'axios'

// please note that I would usually create a constant folder to handle these.
// In this case, only for this, I think it was easier to create a constant here
const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

// Axios init
export const api: AxiosInstance = axios.create({
  baseURL: BASE_API_URL,
});