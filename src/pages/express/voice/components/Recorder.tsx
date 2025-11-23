import { BounceLoader } from "react-spinners";
import Motion from "../../../../components/motion/Motion";
import { EMOTION_COLORS, EMOTION_LABELS, EMOTION_PARTICLE } from "../../../../constants/emotion";
import { MicrophoneIcon, StartIcon, StopIcon } from "../../../../assets";
import { EmotionIcon } from "../../../../components/common/EmotionIcons";

type RecorderProps = {
  isRecording: boolean
  setIsRecording: React.Dispatch<React.SetStateAction<boolean>>
  selectedEmotion: Emotion
  audioChunksRef: React.RefObject<Blob[]>
  mediaRecorderRef: React.RefObject<MediaRecorder | null>
  setAudioURL: React.Dispatch<React.SetStateAction<string | null>>
}

export default function Recorder({
  isRecording,
  setIsRecording,
  selectedEmotion,
  audioChunksRef,
  mediaRecorderRef,
  setAudioURL,
}: RecorderProps) {

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);

      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);

        // 👉 서버 업로드하려면 여기서 audioBlob 사용하면 됨
        // uploadAudio(audioBlob)
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (e) {
      alert("마이크 권한을 허용해주세요.");
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    mediaRecorderRef.current?.stream.getTracks().forEach(track => track.stop());
    setIsRecording(false);
  };

  return (
    <Motion.div
      className={`w-full h-full pt-20 pb-20 flex flex-col items-center justify-center gap-20`}>
      {isRecording ? (
        <div className={`w-[300px] h-[300px] relative`}>
          <BounceLoader
            color={EMOTION_COLORS[selectedEmotion]}
            size={300} />
          <Motion.div
            key={'stop-icon'}
            onClick={stopRecording}>
            <StopIcon className={`w-[100px] h-[100px] absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%] text-gray opacity-50 hover:opacity-100 transition-all-300`} />
          </Motion.div>
        </div>
      ) : (
        <div className={`w-[300px] h-[300px] relative`}>
          <span style={{ backgroundColor: EMOTION_COLORS[selectedEmotion] }} className={`block w-[300px] h-[300px] opacity-60 rounded-full`} />
          <Motion.div
            key={'start-icon'}
            onClick={startRecording}>
            <StartIcon className={`w-[100px] h-[100px] absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%] text-gray opacity-50 hover:opacity-100 transition-all-300`} />
          </Motion.div>
        </div>
      )}

      <div className={`flex flex-col gap-5 items-center`}>
        <div className={`flex flex-row gap-2 items-center text-gray text-[28px]`}>
          <EmotionIcon emotion={selectedEmotion} className={`w-8 h-8`} />
          <p className={`select-none`}>
            <span className={`font-bold`}>{EMOTION_LABELS[selectedEmotion]}</span>{EMOTION_PARTICLE[selectedEmotion]} 포현해 보세요
          </p>
        </div>
        <div className={`flex flex-col gap-2 items-center select-none`}>
          <MicrophoneIcon className={`${isRecording ? `text-gray` : `text-light-gray`} w-12 h-12 transition-all-300`} />
          {isRecording ? (
            <Motion.p key={'recording'} className={`text-[14px]`}>지금 말하세요!</Motion.p>
          ) : (
            <Motion.p key={'click-mic'} className={`text-[14px]`}>시작 버튼을 클릭하세요</Motion.p>
          )}
        </div>
      </div>
    </Motion.div>
  )
}