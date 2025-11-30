import type React from "react";
import useBlobCursorStore from "../../stores/useBlobCursorStore";
import { EMOTION_BG_COLOR, EMOTION_COLOR, EMOTION_LABEL } from "../../constants/emotion";
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

  const handleMouseEnter = () => {
    if (isTransitioning) return;

    setEnteredEmotion(emotion)
    setBlobCursorColor(EMOTION_COLOR[emotion])
  }

  return (
    <div
      className={`w-fit h-fit rounded-[14px] flex flex-row items-center gap-2 transition-all-300 text-[16px] max-md:text-[14px] select-none opacity-60 border border-gray hover:text-gray 
                  px-5 py-2.5 max-md:px-3 max-md:py-2
                  ${enteredEmotion === emotion ? `${EMOTION_BG_COLOR[emotion]}` : ``}`}
      onMouseEnter={handleMouseEnter}
      onPointerEnter={handleMouseEnter}
      onClick={onClick}>
      <EmotionIcon emotion={emotion} className={`w-5 h-5 max-md:w-4 max-md:h-4 transition-all-300`} />
      <p className={`transition-all-300`} onClick={onClick}>{EMOTION_LABEL[emotion]}</p>
    </div>
  )
}