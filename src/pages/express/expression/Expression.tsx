import { useState } from "react";
import EmotionSelectWrapper from "../../../components/emotionSelect/EmotionSelectWrapper";
import EmotionSelect from "../../../components/emotionSelect/EmotionSelect";
import AnalyzeExpression from "./components/AnalyzeExpression";

export default function Expression() {

  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasCamera, setHasCamera] = useState(true);

  const [currentMode, setCurrentMode] = useState<'CAMERA' | 'IMAGE'>('CAMERA');

  const handleEmotionSelect = (selectedEmotion: Emotion | null) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedEmotion(selectedEmotion);
    }, 0);
  }

  return (
    <EmotionSelectWrapper
      setIsTransitioning={setIsTransitioning}
      pageKey={'expression'}>
      {selectedEmotion === null ? (
        <EmotionSelect
          handleEmotionSelect={handleEmotionSelect}
          title={"어떤 감정을 표현해 볼까요?"}
          isTransitioning={isTransitioning} />
      ) : (
        <AnalyzeExpression
          key={'expression'}
          selectedEmotion={selectedEmotion}
          setSelectedEmotion={setSelectedEmotion}
          currentMode={currentMode}
          setCurrentMode={setCurrentMode}
          hasCamera={hasCamera}
          setHasCamera={setHasCamera}/>
      )}
    </EmotionSelectWrapper>
  )
}
