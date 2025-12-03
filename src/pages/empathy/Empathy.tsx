import { useEffect, useState } from "react";
import EmotionSelect from "../../components/emotionSelect/EmotionSelect";
import EmotionSelectWrapper from "../../components/emotionSelect/EmotionSelectWrapper";
import ChatContent from "./components/ChatContent";

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
      {selectedEmotion === null ? (
        <EmotionSelect
          handleEmotionSelect={handleEmotionSelect}
          title={"어떤 감정에 공감해 볼까요?"}
          enableRandom
          isTransitioning={isTransitioning} />
      ) : (
        <ChatContent
          key="empathy-chat"
          selectedEmotion={selectedEmotion}
          setSelectedEmotion={setSelectedEmotion}/>
      )}
    </EmotionSelectWrapper>
  )
}