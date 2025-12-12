import { useQuery } from "@tanstack/react-query"
import { getGrowthResponse } from "../../../apis/growth"

export const useGrowth = () => {

  const {
    data: growthData,
  } = useQuery({
    queryKey: ['growth'],
    queryFn: () => getGrowthResponse(),
  })

  const interpretGrowthList = growthData?.interpretGrowthList
  const empathyGrowthList = growthData?.empathyGrowthList
  const expressGrowthList = growthData?.expressGrowthList
  const monthlyReport = growthData?.monthlyReport
  const empathyType = growthData?.empathyType

  return {
    interpretGrowthList,
    empathyGrowthList,
    expressGrowthList,
    monthlyReport,
    empathyType,
  }
}