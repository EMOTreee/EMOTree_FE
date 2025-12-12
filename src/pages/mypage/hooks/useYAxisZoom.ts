import { useMemo, useState } from "react";
import { floorTo10, ceilTo10 } from "../../../util/GraphCalc";
import { ConvertGrowthData } from "../../../util/ConvertGrowthData";

export const useYAxisZoom = (data: GrowthData, end: number, initialMin = 0, initialMax = 100) => {
  const [minY, setMinY] = useState(initialMin);
  const [maxY, setMaxY] = useState(initialMax);

  const yValues = useMemo(() => {
    return ConvertGrowthData(data)
      .flatMap((serie) => serie.data.slice(-end).map(d => d.y))
      .filter((v): v is number => typeof v === "number");
  }, [data, end]);

  const minYData = Math.min(...yValues);
  const maxYData = Math.max(...yValues);

  const handleYZoom = (deltaY: number) => {
    const zoomStep = 5;

    setMinY((prev) => {
      const next = deltaY < 0 ? prev + zoomStep : prev - zoomStep;
      return Math.min(Math.max(next, 0), floorTo10(minYData));
    });
    setMaxY((prev) => {
      const next = deltaY < 0 ? prev - zoomStep : prev + zoomStep;
      return Math.max(Math.min(next, 100), ceilTo10(maxYData));
    });
  };

  return { minY, maxY, handleYZoom };
};
