import axiosInstance from "./axiosInstance"

const apiUrl = import.meta.env.VITE_API_URL

export const getUserRequest = async () => {
  const { data } = await axiosInstance.get(`${apiUrl}/users/me`)

  return {
    name: data?.nickname ?? null,
    email: data?.email ?? null,
    detail: data?.detail ?? null,
  }
}

export const logOutRequest = async () => {
  await axiosInstance.get(`${apiUrl}/auth/logout`)
}