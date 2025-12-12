import axiosInstance from "./axiosInstance"

export const getGrowthResponse = async () => {
  const { data } = await axiosInstance.get(`/growth/report`)

  return {
    interpretGrowthList: data?.interpretGrowthList,
    empathyGrowthList: data?.empathyGrowthList,
    expressGrowthList: data?.expressGrowthList,
    monthlyReport: data?.monthlyReport,
    empathyType: data?.empathyType
  }
}