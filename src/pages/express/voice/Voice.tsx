import { useState } from "react";
import EmotionSelect from "../../../components/emotionSelect/EmotionSelect";
import EmotionSelectWrapper from "../../../components/emotionSelect/EmotionSelectWrapper";
import AnaylzeVoice from "./components/AnalyzeVoice";

export default function Voice() {

  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [audioURL, setAudioURL] = useState<string | null>(null);

  const handleEmotionSelect = (selectedEmotion: Emotion | null) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedEmotion(selectedEmotion);
    }, 0);
  }


  return (
    <EmotionSelectWrapper
      setIsTransitioning={setIsTransitioning}
      pageKey={'voice'}>
      {selectedEmotion === null ? (
        <EmotionSelect
          handleEmotionSelect={handleEmotionSelect}
          title={"어떤 감정을 표현해 볼까요?"}
          isTransitioning={isTransitioning} />
      ) : (
        <AnaylzeVoice
          key={'anaylze-voice'}
          selectedEmotion={selectedEmotion}
          setSelectedEmotion={setSelectedEmotion}
          audioURL={audioURL}
          setAudioURL={setAudioURL}/>
      )}
    </EmotionSelectWrapper>
  )
}