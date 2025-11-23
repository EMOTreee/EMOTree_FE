import { ResponsiveLine } from "@nivo/line";
import useBlobCursorStore from "../../../stores/useBlobCursorStore";
import Tooltip from "./Tooltip";
import { useRef } from "react";
import { debounce } from "lodash"
import { EMOTION_COLORS } from "../../../constants/emotion";

const graphData = [
  {
    id: 'JOY',
    data: [
      {
        x: 'JAN',
        y: 2
      },
      {
        x: 'FEB',
        y: 2.2
      },
      {
        x: 'MAR',
        y: 2.6
      },
      {
        x: 'APR',
        y: 3
      },

      {
        x: 'MAY',
        y: 3.1
      },
      {
        x: 'JUN',
        y: 3.7
      },
      {
        x: 'JUL',
        y: 3.4
      },
      {
        x: 'AUG',
        y: 3.9
      },
      {
        x: 'SEP',
        y: 4.7
      },
      {
        x: 'OCT',
        y: 6
      },
      {
        x: 'NOV',
        y: 5.7
      },
      {
        x: 'DEC',
        y: 8
      },
    ]
  },
  {
    id: 'SADNESS',
    data: [
      {
        x: 'JAN',
        y: 3
      },
      {
        x: 'FEB',
        y: 2.7
      },
      {
        x: 'MAR',
        y: 3.2
      },
      {
        x: 'APR',
        y: 3.6
      },

      {
        x: 'MAY',
        y: 4
      },
      {
        x: 'JUN',
        y: 4.2
      },
      {
        x: 'JUL',
        y: 4.3
      },
      {
        x: 'AUG',
        y: 4.9
      },
      {
        x: 'SEP',
        y: 4.7
      },
      {
        x: 'OCT',
        y: 5
      },
      {
        x: 'NOV',
        y: 5.7
      },
      {
        x: 'DEC',
        y: 7
      },
    ]
  },
  {
    id: 'ANGRY',
    data: [
      {
        x: 'JAN',
        y: 1
      },
      {
        x: 'FEB',
        y: 1.7
      },
      {
        x: 'MAR',
        y: 2
      },
      {
        x: 'APR',
        y: 2.6
      },

      {
        x: 'MAY',
        y: 2.4
      },
      {
        x: 'JUN',
        y: 3.2
      },
      {
        x: 'JUL',
        y: 3.7
      },
      {
        x: 'AUG',
        y: 4
      },
      {
        x: 'SEP',
        y: 4.7
      },
      {
        x: 'OCT',
        y: 5.6
      },
      {
        x: 'NOV',
        y: 6
      },
      {
        x: 'DEC',
        y: 8
      },
    ]
  },
  {
    id: 'ANXIETY',
    data: [
      {
        x: 'JAN',
        y: 6
      },
      {
        x: 'FEB',
        y: 5.7
      },
      {
        x: 'MAR',
        y: 6.2
      },
      {
        x: 'APR',
        y: 6.4
      },
      {
        x: 'MAY',
        y: 6.6
      },
      {
        x: 'JUN',
        y: 7
      },
      {
        x: 'JUL',
        y: 7.3
      },
      {
        x: 'AUG',
        y: 7.2
      },
      {
        x: 'SEP',
        y: 8
      },
      {
        x: 'OCT',
        y: 8.1
      },
      {
        x: 'NOV',
        y: 8.2
      },
      {
        x: 'DEC',
        y: 8.5
      },
    ]
  },
  {
    id: 'SURPRISE',
    data: [
      {
        x: 'JAN',
        y: 4
      },
      {
        x: 'FEB',
        y: 4.6
      },
      {
        x: 'MAR',
        y: 4.4
      },
      {
        x: 'APR',
        y: 5
      },
      {
        x: 'MAY',
        y: 5.2
      },
      {
        x: 'JUN',
        y: 5.5
      },
      {
        x: 'JUL',
        y: 6
      },
      {
        x: 'AUG',
        y: 6.6
      },
      {
        x: 'SEP',
        y: 7
      },
      {
        x: 'OCT',
        y: 7.3
      },
      {
        x: 'NOV',
        y: 8
      },
      {
        x: 'DEC',
        y: 8.1
      },
    ],
  }
];

export default function Graph() {

  const {
    blobCursorColor,
    setBlobCursorColor
  } = useBlobCursorStore();

  const updateColor = useRef(
    debounce((color: string) => setBlobCursorColor(color), 10)
  ).current;

  return (
    <div className={`cursor-none w-full h-full`}>
      <ResponsiveLine
        data={graphData}
        useMesh={true}
        colors={(serie) => EMOTION_COLORS[serie.id as Emotion]}
        pointColor='white'
        pointBorderWidth={2}
        pointBorderColor={(d) =>
          EMOTION_COLORS[d.seriesId as Emotion]
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