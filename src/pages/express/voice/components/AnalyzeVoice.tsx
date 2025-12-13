import { HashLoader } from "react-spinners";
import { EmotionIcon } from "../../../../components/common/EmotionIcons";
import Navigator from "../../../../components/common/Navigator";
import TypingText from "../../../../components/common/TypingText";
import Motion from "../../../../components/motion/Motion";
import { EMOTION_BG_COLOR, EMOTION_COLOR } from "../../../../constants/emotion";
import { useAnalyzeVoice } from "../hooks/useAnalyzeVoice";
import AudioPlayButton from "./AudioPlayButton";
import Recorder from "./Recorder";
import { AnimatePresence, motion } from 'framer-motion';

type AnaylzeVoiceProps = {
  selectedEmotion: Emotion;
  setSelectedEmotion: React.Dispatch<React.SetStateAction<Emotion | null>>;
  audioURL: string | null;
  setAudioURL: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function AnaylzeVoice({
  selectedEmotion,
  setSelectedEmotion,
  audioURL,
  setAudioURL,
}: AnaylzeVoiceProps) {

  const {
    analyzeAudio,
    feedback,
  } = useAnalyzeVoice(selectedEmotion)

  const handleBackspace = () => {
    setSelectedEmotion(null)
    setAudioURL(null)
  }

  const handleRetry = () => {
    setAudioURL(null)
  }

  return (
    <Motion.div className={`w-full`}>
      <AnimatePresence mode="wait">
        {audioURL === null ? (
          <Recorder
            key={'recorder'}
            analyzeAudio={analyzeAudio}
            selectedEmotion={selectedEmotion as Emotion}
            setAudioURL={setAudioURL} />
        ) : (
          <AnimatePresence mode="wait">
            {feedback ? (
              <Motion.div key={'feedback'} className={`flex flex-col gap-10 z-1`}>
                <div className={`flex flex-col gap-5 items-center`}>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ opacity: 0, height: 110 }}
                    transition={{ duration: 0.3 }}
                    className={`${EMOTION_BG_COLOR[selectedEmotion]} rounded-[20px] px-4 py-3 text-[16px] max-md:text-[14px] w-[40vw] max-md:w-[60vw] max-sm:w-[80vw] overflow-auto no-scroll`}>
                    <TypingText text={feedback} />
                  </motion.div>
                  <Navigator
                    handleBackspace={handleBackspace}
                    handleRetry={handleRetry} />
                </div>
                <div className={`flex flex-col gap-5`}>
                  <div className={`flex flex-row gap-2 justify-center items-center`}>
                    <EmotionIcon emotion={selectedEmotion} className={`w-8 h-8`} />
                    <p className={`text-[28px]`}>표현한 <span className={`font-bold`}>감정</span>을 들어 보세요</p>
                  </div>
                  <AudioPlayButton audioURL={audioURL} />
                </div>
              </Motion.div>
            ) : (
              <Motion.div
                key={'load'}
                className={`min-h-[110px] flex justify-center items-center`}>
                <HashLoader
                  color={EMOTION_COLOR[selectedEmotion]}
                  loading
                  size={40}
                />
              </Motion.div>
            )}
          </AnimatePresence>
        )}
      </AnimatePresence>
    </Motion.div>
  )
}