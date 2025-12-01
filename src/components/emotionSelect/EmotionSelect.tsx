import EmotionButton from "./EmotionButton"
import Motion from "../motion/Motion"
import { useEffect, useState } from "react"
import useBlobCursorStore from "../../stores/useBlobCursorStore"
import { EMOTION_COLOR } from "../../constants/emotion"

type EmotionSelectProps = {
  handleEmotionSelect: (emotion: Emotion | null) => void
  title: string
  enableRandom?: boolean
  isTransitioning?: boolean
}

export default function EmotionSelect({
  handleEmotionSelect,
  title,
  enableRandom,
  isTransitioning,
}: EmotionSelectProps) {

  const EmotionList = [
    ...(enableRandom ? ["RANDOM"] : []),
    "JOY",
    "SADNESS",
    "ANGER",
    "SURPRISE",
    "ANXIETY"
  ] as Emotion[]

  const {
    setBlobCursorColor
  } = useBlobCursorStore();

  const [enteredEmotion, setEnteredEmotion] = useState<Emotion>('RANDOM');

  useEffect(() => {
    setBlobCursorColor(EMOTION_COLOR['RANDOM'])
  }, [])

  return (
    <Motion.div
      key={'emotion-select'}
      className={`h-full responsive-p-t pb-20 flex flex-col items-center justify-center gap-10`}>
      <p className={`text-[32px] max-md:text-[28px] max-sm:text-[24px] font-semibold select-none transition-all-300`}>{title}</p>
      <div className={`flex flex-row flex-wrap justify-center ${enableRandom ? `` : `lg:gap-10`} gap-5 max-sm:px-10 transition-all-300`}>
        {EmotionList.map((emotion) => (
          <div key={emotion} className={`md:mb-5`}>
            <EmotionButton 
              emotion={emotion as Emotion} 
              onClick={() => handleEmotionSelect(emotion)} 
              enteredEmotion={enteredEmotion} 
              setEnteredEmotion={setEnteredEmotion} 
              isTransitioning={isTransitioning}/>
          </div>
        ))}
      </div>
    </Motion.div>
  )
}