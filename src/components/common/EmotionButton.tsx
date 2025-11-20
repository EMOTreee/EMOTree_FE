import type React from "react";
import { AngryIcon, AnxietyIcon, HappyIcon, RandomIcon, SadIcon, SurpriseIcon } from "../../assets";
import useBlobCursorStore from "../../stores/useblobCursorStore";

type EmotionButtonProps = {
  emotion: Emotion
}

export default function EmotionButton({
  emotion
}: EmotionButtonProps) {

  const {
    setBlobCursorColor,
  } = useBlobCursorStore();

  const EMOTION_LABELS = {
    RANDOM: "랜덤",
    HAPPY: "기쁨",
    SAD: "슬픔",
    ANGRY: "분노",
    SURPRISE: "놀람",
    ANXIETY: "불안",
  } as const satisfies Record<Emotion, string>;

  const EMOTION_ICON = {
    RANDOM: <RandomIcon className={`w-5 h-5`} />,
    HAPPY: <HappyIcon className={`w-5 h-5`} />,
    SAD: <SadIcon className={`w-5 h-5`} />,
    ANGRY: <AngryIcon className={`w-5 h-5`} />,
    SURPRISE: <SurpriseIcon className={`w-5 h-5`} />,
    ANXIETY: <AnxietyIcon className={`w-5 h-5`} />,
  } as const satisfies Record<Emotion, React.ReactNode>;

  const COLOR = {
    RANDOM: "#DBDBDB",
    HAPPY: "#EEEE81",
    SAD: "#81B4EE",
    ANGRY: "#EEC881",
    SURPRISE: "#C2B3F0",
    ANXIETY: "#B4EE81",
  } as const satisfies Record<Emotion, string>;

  const BG_COLOR = {
    RANDOM: "hover:bg-gray",
    HAPPY: "hover:bg-yellow",
    SAD: "hover:bg-blue",
    ANGRY: "hover:bg-orange",
    SURPRISE: "hover:bg-purple",
    ANXIETY: "hover:bg-green",
  } as const satisfies Record<Emotion, string>;

  const BORDER_COLOR = {
    RANDOM: "border-gray",
    HAPPY: "border-yellow",
    SAD: "border-blue",
    ANGRY: "border-orange",
    SURPRISE: "border-purple",
    ANXIETY: "border-green",
  } as const satisfies Record<Emotion, string>;

  return (
    <div
      className={`w-fit h-fit rounded-[10px] px-5 py-2.5 flex flex-row items-center gap-2 transition-all-300 text-[16px] z-50 cursor-pointer 
                  opacity-50 border ${BORDER_COLOR[emotion]} 
                  hover:opacity-100 ${BG_COLOR[emotion]}`}
      onMouseOver={() => setBlobCursorColor(COLOR[emotion])}>
      {EMOTION_ICON[emotion]}
      <p>{EMOTION_LABELS[emotion]}</p>
    </div>
  )
}