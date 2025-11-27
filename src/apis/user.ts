import axiosInstance from "./axiosInstance"

export const getUserResponse = async () => {
  const { data } = await axiosInstance.get(`/users/me`)

  return {
    name: data?.nickname ?? null,
    email: data?.email ?? null,
    detail: data?.detail ?? null,
  }
}

export const getLogoutResponse = async () => {
  await axiosInstance.get(`/auth/logout`)
}