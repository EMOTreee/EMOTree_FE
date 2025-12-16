import { EmotionIcon } from "../../../components/common/EmotionIcons"
import { EMOTION_LABEL } from "../../../constants/emotion"

type EmpathyTitleProp = {
  emotion: Emotion
}

export default function EmpathyTitle({
  emotion
}: EmpathyTitleProp) {

  return (
    <div className={`w-full flex flex-row items-center justify-center gap-2 max-sm:gap-1.5 text-gray text-[28px] max-md:text-[24px] max-sm:text-[20px] pt-8 pb-5 select-none transition-all-300`}>
      <EmotionIcon
        emotion={emotion}
        className={`w-8 h-8 max-md:w-7 max-md:h-7 max-sm:w-6 max-sm:h-6 transition-all-300`} />
      <p>
        <span className={`font-bold`}>
          {emotion === 'RANDOM' ? '감정' : EMOTION_LABEL[emotion]}
        </span>
        에 공감해 보세요
      </p>
    </div>
  )
}