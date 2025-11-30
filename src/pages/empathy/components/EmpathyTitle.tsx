import { EmotionIcon } from "../../../components/common/EmotionIcons"
import { EMOTION_LABEL } from "../../../constants/emotion"

type EmpathyTitleProp = {
  emotion: Emotion
}

export default function EmpathyTitle({
  emotion
}: EmpathyTitleProp) {

  return (
    <div className={`w-full flex flex-row items-center justify-center gap-2 text-gray text-[28px] pt-8 pb-5 select-none`}>
      <EmotionIcon
        emotion={emotion}
        className={`w-8 h-8`} />
      <p>
        <span className={`font-bold`}>
          {EMOTION_LABEL[emotion]}
        </span>
        에 공감해 보세요
      </p>
    </div>
  )
}