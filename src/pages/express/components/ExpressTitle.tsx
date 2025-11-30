import { EmotionIcon } from "../../../components/common/EmotionIcons";
import { EMOTION_LABEL, EMOTION_PARTICLE } from "../../../constants/emotion";

type ExpressTitleProps = {
  selectedEmotion: Emotion
}

export default function ExpressTitle({
  selectedEmotion
}: ExpressTitleProps ) {

  return (
    <div className={`flex flex-row gap-2 items-center text-gray text-[28px] max-lg:text-[24px] max-md:text-[20px] transition-all-300`}>
      <EmotionIcon emotion={selectedEmotion} className={`w-8 h-8 max-lg:w-7 max-lg:h-7 max-md:w-6 max-md:h-6`} />
      <p className={`select-none`}>
        <span className={`font-bold`}>{EMOTION_LABEL[selectedEmotion]}</span>{EMOTION_PARTICLE[selectedEmotion]} 포현해 보세요
      </p>
    </div>
  )
}