export const ConvertGrowthData = (data: GrowthData) => {
  if (!data) return [];
  return data.map((item) => ({
    id: item.emotion,
    data: item.data
  }))
}