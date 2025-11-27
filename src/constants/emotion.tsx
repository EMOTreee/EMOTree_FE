export const EMOTION_COLORS: Record<Emotion, string> = {
  RANDOM: '#DBDBDB',
  JOY: '#EEEE81',
  SADNESS: '#81B4EE',
  ANGRY: '#EEC881',
  SURPRISE: '#C2B3F0',
  ANXIETY: '#B4EE81',
}

export const BG_COLOR = {
  RANDOM: "bg-light-gray",
  JOY: "bg-yellow",
  SADNESS: "bg-blue",
  ANGRY: "bg-orange",
  SURPRISE: "bg-purple",
  ANXIETY: "bg-green",
} as const satisfies Record<Emotion, string>;

export const EMOTION_LABELS = {
  RANDOM: "랜덤",
  JOY: "기쁨",
  SADNESS: "슬픔",
  ANGRY: "분노",
  SURPRISE: "놀람",
  ANXIETY: "불안",
} as const satisfies Record<Emotion, string>;

export const EMOTION_PARTICLE = {
  RANDOM: "을",
  JOY: "을",
  SADNESS: "을",
  ANGRY: "를",
  SURPRISE: "을",
  ANXIETY: "을",
}