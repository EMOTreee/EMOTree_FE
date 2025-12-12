import { ResponsiveLine } from "@nivo/line";
import useBlobCursorStore from "../../../stores/useBlobCursorStore";
import Tooltip from "./Tooltip";
import { useRef, useState } from "react";
import { debounce } from "lodash"
import { EMOTION_COLOR } from "../../../constants/emotion";
import { useYAxisZoom } from "../hooks/useYAxisZoom";
import { useGraphData } from "../hooks/useGraphData";

type GraphProps = {
  data: GrowthData
}

export default function Graph({
  data,
}: GraphProps) {

  const {
    blobCursorColor,
    setBlobCursorColor
  } = useBlobCursorStore();

  const [end, setEnd] = useState(12); // 예: 최근 12개월만 보기

  const updateColor = useRef(
    debounce((color: string) => setBlobCursorColor(color), 100)
  ).current;

  const { minY, maxY, handleYZoom } = useYAxisZoom(data, end);
  const graphData = useGraphData(data, end);

  const handleWheel = (e: React.WheelEvent) => {
    if (e.shiftKey) {
      // X축 zoom
      setEnd((prev) => {
        const next = e.deltaY < 0 ? prev - 1 : prev + 1;
        return Math.min(Math.max(next, 3), 12);
      });
    } else {
      // Y축 zoom
      handleYZoom(e.deltaY)
    }
  };

  return (
    <div
      className={`cursor-none w-full h-full z-100`}
      onWheel={(e) => handleWheel(e)}>
      <ResponsiveLine
        yScale={{
          type: "linear",
          min: minY,
          max: maxY,
        }}
        data={graphData}
        useMesh={true}
        colors={(serie) => EMOTION_COLOR[serie.id as Emotion]}
        pointColor='white'
        pointBorderWidth={2}
        pointBorderColor={(d) =>
          EMOTION_COLOR[d.seriesId as Emotion]
        }
        curve='linear'
        pointSize={10}
        margin={{ top: 40, bottom: 40, left: 40, right: 120 }}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 100,
            itemsSpacing: 4,
            itemWidth: 80,
            itemHeight: 20,
            symbolSize: 12,
            symbolShape: "square",
          },
        ]}
        onMouseMove={(point) => {
          const p = point as Point;
          if (p.borderColor !== blobCursorColor)
            updateColor(p.borderColor)
        }}
        tooltip={({ point }) => {
          const p = point as Point
          return (<Tooltip seriesId={p.seriesId} color={p.borderColor} month={p.data.x} value={p.data.y} />)
        }}
      />
    </div >
  )
}