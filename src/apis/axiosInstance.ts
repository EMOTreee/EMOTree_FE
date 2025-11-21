import axios from "axios"

const axiosInstance = axios.create({
  withCredentials: true,
  headers: {
    Accept: "application/json"
  }
})

export default axiosInstance;