import { EMOTION_BG_COLOR } from "../../../constants/emotion";


export default function MobileLegends({
  emotion
}: { emotion: Emotion }) {
  return (
    <div className={`flex gap-0.5 items-center`}>
      <span className={`${EMOTION_BG_COLOR[emotion]} w-2 aspect-square`} />
      <p className={`text-[8px]`}>{emotion}</p>
    </div>
  )
}