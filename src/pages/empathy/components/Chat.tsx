import TypingText from "../../../components/common/TypingText"
import Motion from "../../../components/motion/Motion"
import { EMOTION_BG_COLOR } from "../../../constants/emotion"

type ChatProps = {
  text?: string
  emotion?: Emotion
  isUser: boolean
  isPending?: boolean
}

export default function Chat({
  text = "피드백 생성 중",
  emotion = 'RANDOM',
  isUser,
  isPending,
}: ChatProps) {

  return (
    <Motion.div className={`w-full flex opacity-80 select-none ${isUser ? `justify-end` : `justify-start`} min-w-10 h-fit shrink-0`}>
      <div className={`h-fit max-w-[400px] px-4 py-3 rounded-[20px] text-[16px] min-h-[50px] whitespace-pre-wrap
        ${isPending ? `text-gray` : `text-black`}
        ${isUser ? `border border-gray` : `${EMOTION_BG_COLOR[emotion]}`}`}>
        {isUser ? text : (
          <TypingText text={text} className={`whitespace-pre-wrap`} loop={isPending}/>
        )}
      </div>
    </Motion.div>
  )
}