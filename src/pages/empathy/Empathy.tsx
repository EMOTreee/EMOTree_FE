import { useEffect, useState } from "react";
import EmotionSelect from "../../components/emotionSelect/EmotionSelect";
import Motion from "../../components/motion/Motion";
import EmotionSelectWrapper from "../../components/emotionSelect/EmotionSelectWrapper";

export default function Empathy() {

  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleEmotionSelect = (selectedEmotion: Emotion | null) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedEmotion(selectedEmotion);
    }, 0);
  }

  useEffect(() => {
    return () => {
      setSelectedEmotion(null);
    }
  }, []);

  return (
    <EmotionSelectWrapper
      setIsTransitioning={setIsTransitioning}
      pageKey={'empathy'}>
      {selectedEmotion === null && (
        <EmotionSelect
          handleEmotionSelect={handleEmotionSelect}
          title={"어떤 감정에 공감해 볼까요?"}
          enableRandom
          isTransitioning={isTransitioning} />
      )}

      {selectedEmotion !== null && (
        <Motion.div
          key="empathy-content"
          className={`h-full responsive-p-t pb-20 flex flex-col items-center justify-center gap-10`}>
          <p className={`text-[24px] font-semibold`}>선택한 감정: {selectedEmotion}</p>
        </Motion.div>
      )}
    </EmotionSelectWrapper>
  )
}