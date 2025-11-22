import type React from "react";
import { AngryIcon, AnxietyIcon, JoyIcon, RandomIcon, SadnessIcon, SurpriseIcon } from "../../assets";
import useBlobCursorStore from "../../stores/useBlobCursorStore";

type EmotionButtonProps = {
  emotion: Emotion
  onClick: () => void
  enteredEmotion: Emotion | null
  setEnteredEmotion: React.Dispatch<React.SetStateAction<Emotion>>
}

export default function EmotionButton({
  emotion,
  onClick,
  enteredEmotion,
  setEnteredEmotion,
}: EmotionButtonProps) {

  const {
    setBlobCursorColor,
  } = useBlobCursorStore();

  const EMOTION_LABELS = {
    RANDOM: "랜덤",
    JOY: "기쁨",
    SADNESS: "슬픔",
    ANGRY: "분노",
    SURPRISE: "놀람",
    ANXIETY: "불안",
  } as const satisfies Record<Emotion, string>;

  const EMOTION_ICON = {
    RANDOM: <RandomIcon className={`w-5 h-5 text-black`} onClick={onClick}/>,
    JOY: <JoyIcon className={`w-5 h-5 text-black`} onClick={onClick}/>,
    SADNESS: <SadnessIcon className={`w-5 h-5 text-black`} onClick={onClick}/>,
    ANGRY: <AngryIcon className={`w-5 h-5 text-black`} onClick={onClick}/>,
    SURPRISE: <SurpriseIcon className={`w-5 h-5 text-black`} onClick={onClick}/>,
    ANXIETY: <AnxietyIcon className={`w-5 h-5 text-black`} onClick={onClick}/>,
  } as const satisfies Record<Emotion, React.ReactNode>;

  const COLOR = {
    RANDOM: "#DBDBDB",
    JOY: "#EEEE81",
    SADNESS: "#81B4EE",
    ANGRY: "#EEC881",
    SURPRISE: "#C2B3F0",
    ANXIETY: "#B4EE81",
  } as const satisfies Record<Emotion, string>;

  const BG_COLOR = {
    RANDOM: "bg-light-gray",
    JOY: "bg-yellow",
    SADNESS: "bg-blue",
    ANGRY: "bg-orange",
    SURPRISE: "bg-purple",
    ANXIETY: "bg-green",
  } as const satisfies Record<Emotion, string>;

  const handleMouseEnter = () => {
    setEnteredEmotion(emotion)
    setBlobCursorColor(COLOR[emotion])
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
      {EMOTION_ICON[emotion]}
      <p onClick={onClick}>{EMOTION_LABELS[emotion]}</p>
    </div>
  )
}