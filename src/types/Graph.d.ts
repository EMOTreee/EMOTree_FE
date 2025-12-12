type Point = {
  borderColor: string
  data: {
    x: string,
    y: string | number
  }
  seriesId: string
}

type GrowthData = {
  emotion: Emotion;
  data: {
    x: string,
    y: number,
  }[];
}[];