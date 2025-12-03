import { useEffect, useState } from "react";
import EmotionSelect from "../../components/emotionSelect/EmotionSelect";
import Motion from "../../components/motion/Motion";
import { useResponsiveSize } from "../../hooks/useResponiveSize";
import { useQuiz } from "./hooks/useQuiz"
import { HashLoader } from "react-spinners";
import { AnimatePresence } from "framer-motion";
import AnimateContainer from "../../components/common/AnimateContainer";
import EmotionSelectWrapper from "../../components/emotionSelect/EmotionSelectWrapper";
import EmotionButton from "../../components/emotionSelect/EmotionButton";
import Navigator from "../../components/common/Navigator";

export default function Recognize() {

  const {
    quizId,
    quizImageUrl,
    quizMutate,
    correctEmotion,
    feedback,
    isQuizFetching,
    refetchQuiz,
  } = useQuiz();

  const size = useResponsiveSize(0.4, 250, 400)
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleRetry = () => {
    setSelectedEmotion(null)
    refetchQuiz()
  }

  useEffect(() => {
    const submitAnswer = async () => {
      if (selectedEmotion && quizId) {
        quizMutate.mutate({ quizId, answer: selectedEmotion })
      }
    }
    submitAnswer()
  }, [selectedEmotion])

  return (
    <AnimateContainer>
      <Motion.div
        key={'recognize'}
        className={`responsive-p-t h-full flex flex-col justify-center items-center gap-10 select-none`}>
        <p className={`text-[32px] font-semibold`}>어떤 감정이 담겨있을까요?</p>
        <AnimatePresence mode={'wait'}>
          {isQuizFetching ? (
            <Motion.div
              key={'quiz-loading'}
              className={`flex flex-col justify-center items-center`}
              style={{ width: size, height: size }} >
              <HashLoader
                color={'#6FB936'}
                loading
                size={40} />
            </Motion.div>
          ) : (
            <Motion.div key={'quiz-image'} className={`relative`}>
              <img
                src={quizImageUrl || ""}
                className={`rounded-full transition-all-300 ${feedback ? `opacity-50` : ``}`}
                style={{ width: size, height: size }} />
              {feedback &&
                <Motion.div className={`absolute bottom-[10%] left-1/2 -translate-x-1/2`}>
                  <EmotionButton emotion={correctEmotion as Emotion} eventNone />
                </Motion.div>
              }
            </Motion.div>
          )}
        </AnimatePresence>

        <EmotionSelectWrapper
          setIsTransitioning={setIsTransitioning}
          pageKey={'recognize-emotion-select'}
          heightFull={false}
          className={`min-h-[146px] max-md:min-h-[119px]`}>
          {selectedEmotion === null ? (
            <EmotionSelect
              handleEmotionSelect={setSelectedEmotion}
              isTransitioning={isTransitioning} />
          ) : (
            <Motion.div 
              key={'recognize-feedback'}
              className={`flex flex-col gap-5`}>
              <p className={`text-[14px] w-[50%] text-center mx-auto`}>
                {feedback}
              </p>
              <Navigator handleRetry={handleRetry} noneBackspace />
            </Motion.div>
          )}
        </EmotionSelectWrapper>
      </Motion.div>
    </AnimateContainer>
  )
}