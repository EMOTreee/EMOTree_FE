import Motion from "../../../components/motion/Motion";
import { useRef, useState } from "react";
import EmotionSelect from "../../../components/emotionSelect/EmotionSelect";
import Recorder from "./components/Recorder";
import AudioPlayButton from "./components/AudioPlayButton";
import EmotionSelectWrapper from "../../../components/emotionSelect/EmotionSelectWrapper";
import Navigator from "../../../components/common/Navigator";

export default function Voice() {

  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [isRecording, setIsRecording] = useState<boolean>(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const [audioURL, setAudioURL] = useState<string | null>(null);

  const handleEmotionSelect = (selectedEmotion: Emotion | null) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedEmotion(selectedEmotion);
    }, 0);
  }

  const handleBackspace = () => {
    setSelectedEmotion(null)
    setAudioURL(null)
  }

  const handleRetry = () => {
    setAudioURL(null)
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
        audioURL === null ? (
          <Recorder
            key={'recorder'}
            isRecording={isRecording}
            setIsRecording={setIsRecording}
            selectedEmotion={selectedEmotion}
            audioChunksRef={audioChunksRef}
            mediaRecorderRef={mediaRecorderRef}
            setAudioURL={setAudioURL} />
        ) : (
          <Motion.div key={'listen'} className={`flex flex-col gap-10 z-1`}>
            <Navigator
              handleBackspace={handleBackspace}
              handleRetry={handleRetry}/>
            <AudioPlayButton audioURL={audioURL} />
          </Motion.div>
        )
      )}
    </EmotionSelectWrapper>
  )
}