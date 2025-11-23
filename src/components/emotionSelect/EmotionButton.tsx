import type React from "react";
import useBlobCursorStore from "../../stores/useBlobCursorStore";
import { EMOTION_COLORS, EMOTION_LABELS } from "../../constants/emotion";
import { EmotionIcon } from "../common/EmotionIcons";

type EmotionButtonProps = {
  emotion: Emotion
  onClick: () => void
  enteredEmotion: Emotion | null
  setEnteredEmotion: React.Dispatch<React.SetStateAction<Emotion>>
  isTransitioning?: boolean
}

export default function EmotionButton({
  emotion,
  onClick,
  enteredEmotion,
  setEnteredEmotion,
  isTransitioning,
}: EmotionButtonProps) {

  const {
    setBlobCursorColor,
  } = useBlobCursorStore();

  const BG_COLOR = {
    RANDOM: "bg-light-gray",
    JOY: "bg-yellow",
    SADNESS: "bg-blue",
    ANGRY: "bg-orange",
    SURPRISE: "bg-purple",
    ANXIETY: "bg-green",
  } as const satisfies Record<Emotion, string>;

  const handleMouseEnter = () => {
    if (isTransitioning) return;

    setEnteredEmotion(emotion)
    setBlobCursorColor(EMOTION_COLORS[emotion])
  }

  return (
    <div
      className={`w-fit h-fit rounded-[14px] px-5 py-2.5 flex flex-row items-center gap-2 transition-all-300 text-[16px] select-none
                  opacity-60 border border-gray
                hover:text-gray 
                  ${enteredEmotion === emotion ? `${BG_COLOR[emotion]}` : ``}`}
      onMouseEnter={handleMouseEnter}
      onPointerEnter={handleMouseEnter}
      onClick={onClick}>
      <EmotionIcon emotion={emotion} className={`w-5 h-5`} />
      <p onClick={onClick}>{EMOTION_LABELS[emotion]}</p>
    </div>
  )
}