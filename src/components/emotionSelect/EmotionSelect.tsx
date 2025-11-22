import EmotionButton from "./EmotionButton"
import Motion from "../motion/Motion"
import { useState } from "react"

type EmotionSelectProps = {
  handleEmotionSelect: (emotion: Emotion | null) => void
  title: string
  enableRandom?: boolean
}

export default function EmotionSelect({
  handleEmotionSelect,
  title,
  enableRandom,
}: EmotionSelectProps) {

  const EmotionList = [
    ...(enableRandom ? ["RANDOM"] : []),
    "JOY",
    "SADNESS",
    "ANGRY",
    "SURPRISE",
    "ANXIETY"
  ] as Emotion[]

  const [enteredEmotion, setEnteredEmotion] = useState<Emotion>('RANDOM');

  return (
    <Motion.div
      className={`h-full pt-20 pb-20 flex flex-col items-center justify-center gap-10`}>
      <p className={`text-[32px] font-semibold select-none`}>{title}</p>
      <div className={`flex flex-row ${enableRandom ? `gap-5` : `gap-10`}`}>
        {EmotionList.map((emotion) => (
          <div key={emotion} className={`mb-5`}>
            <EmotionButton 
              emotion={emotion as Emotion} 
              onClick={() => handleEmotionSelect(emotion)} 
              enteredEmotion={enteredEmotion} 
              setEnteredEmotion={setEnteredEmotion} />
          </div>
        ))}
      </div>
    </Motion.div>
  )
}