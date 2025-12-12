import { useMemo } from "react";
import { ConvertGrowthData } from "../../../util/ConvertGrowthData";

export const useGraphData = (data: GrowthData, end: number) => {
  return useMemo(() => 
    ConvertGrowthData(data).map((serie) => ({
      ...serie,
      data: serie.data.slice(-end)
    })),
    [data, end]
  );
};
