import axios from "axios"

const axiosInstance = axios.create({
  withCredentials: true,
  headers: {
    Accept: "application/json"
  },
  baseURL: import.meta.env.VITE_API_URL
})

export default axiosInstance;