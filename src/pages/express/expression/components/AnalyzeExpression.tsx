import { useEffect } from "react";
import { CameraIcon, ImageIcon } from "../../../../assets";
import Motion from "../../../../components/motion/Motion";
import { EMOTION_BG_COLOR, EMOTION_COLOR } from "../../../../constants/emotion";
import CameraCapture from "./CameraCapture";
import { AnimatePresence, motion } from "framer-motion";
import ImageDrop from "./ImageDrop";
import { HashLoader } from 'react-spinners';
import Navigator from "../../../../components/common/Navigator";
import TypingText from "../../../../components/common/TypingText";
import ExpressTitle from "../../components/ExpressTitle";
import { useAnalyzeExpression } from "../hooks/useAnalyzeExpression";

type AnalyzeExpressionProps = {
  selectedEmotion: Emotion
  setSelectedEmotion: React.Dispatch<React.SetStateAction<Emotion | null>>
  currentMode: 'CAMERA' | 'IMAGE'
  setCurrentMode: React.Dispatch<React.SetStateAction<"CAMERA" | "IMAGE">>
  hasCamera: boolean
  setHasCamera: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AnalyzeExpression({
  selectedEmotion,
  setSelectedEmotion,
  currentMode,
  setCurrentMode,
  hasCamera,
  setHasCamera,
}: AnalyzeExpressionProps) {

  const {
    imageUrl,
    setImageUrl,
    photo,
    setPhoto,
    feedback,
    setFeedback,
    isPending,
  } = useAnalyzeExpression(selectedEmotion);

  const handleMouseEnter = (mode: typeof currentMode) => {
    if (!imageUrl) setCurrentMode(mode)
  }


  const handleBackspace = () => {
    setFeedback(null)
    setPhoto(null)
    setImageUrl(null)
    setSelectedEmotion(null)
  }

  const handleRetry = () => {
    setFeedback(null)
    setPhoto(null)
    setImageUrl(null)
  }

  useEffect(() => {
    return () => {
      setImageUrl(null)
    }
  }, [currentMode])

  return (
    <Motion.div className={`w-full h-full responsive-p-t pb-20 flex flex-col items-center justify-center gap-10 max-md:gap-20 z-1`}>
      <AnimatePresence mode="wait">
        {currentMode === 'CAMERA' ? (
          <CameraCapture
            key={'camera'}
            setCurrentMode={setCurrentMode}
            setHasCamera={setHasCamera}
            setImageUrl={setImageUrl}
            photo={photo}
            setPhoto={setPhoto} />
        ) : (
          <ImageDrop
            key={'image'}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl} />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!isPending && !feedback ? (
          <motion.div className={`flex flex-col gap-5 items-center h-[110px]`}>
            <ExpressTitle selectedEmotion={selectedEmotion} />
            <div className={`flex flex-row gap-5 items-center select-none`}>
              {hasCamera &&
                <CameraIcon
                  className={`${currentMode === 'CAMERA' ? `text-gray` : `text-light-gray`} w-12 h-12 max-lg:w-11 max-lg:h-11 max-md:w-10 max-md:h-10 transition-all-300 hover:text-gray`}
                  onMouseEnter={() => handleMouseEnter('CAMERA')} />
              }
              <ImageIcon
                className={`${currentMode === 'CAMERA' ? `text-light-gray` : `text-gray`} w-12 h-12 max-lg:w-11 max-lg:h-11 max-md:w-10 max-md:h-10 transition-all-300 hover:text-gray`}
                onMouseEnter={() => handleMouseEnter('IMAGE')} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={'feedback'}
            animate={{ height: 'auto' }}
            exit={{ opacity: 0, height: 110 }}
            transition={{ duration: 0.3 }}>
            {feedback ? (
              <div className={`flex flex-col gap-5 min-h-[110px] w-full items-center`}>
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
            ) : (
              <div className={`min-h-[110px]`}>
                <HashLoader
                  color={EMOTION_COLOR[selectedEmotion]}
                  loading
                  size={40}
                />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Motion.div>
  )
}