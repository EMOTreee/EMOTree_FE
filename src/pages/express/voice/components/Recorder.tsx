import { BounceLoader } from "react-spinners";
import Motion from "../../../../components/motion/Motion";
import { EMOTION_COLOR } from "../../../../constants/emotion";
import { MicrophoneIcon, StartIcon, StopIcon } from "../../../../assets";
import ExpressTitle from "../../components/ExpressTitle";
import { useResponsiveSize } from "../../../../hooks/useResponiveSize";

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

  const size = useResponsiveSize(0.4, 200, 300)

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
      console.log(e);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    mediaRecorderRef.current?.stream.getTracks().forEach(track => track.stop());
    setIsRecording(false);
  };

  return (
    <Motion.div
      className={`w-full h-full responsive-p-t pb-20 flex flex-col items-center justify-center gap-20`}>
      {isRecording ? (
        <div className={`w-[40%] min-w-[200px] max-w-[300px] aspect-square relative flex justify-center items-center`}>
          <BounceLoader
            color={EMOTION_COLOR[selectedEmotion]}
            size={size} />
          <Motion.div
            key={'stop-icon'}
            onClick={stopRecording}>
            <StopIcon className={`w-[100px] h-[100px] max-md:w-20 max-md:h-20 max-sm:w-[60px] max-sm:h-[60px] absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%] text-gray opacity-50 hover:opacity-100 transition-all-300`} />
          </Motion.div>
        </div>
      ) : (
        <div className={`w-[40%] min-w-[200px] max-w-[300px] aspect-square relative transition-all-300`}>
          <span style={{ backgroundColor: EMOTION_COLOR[selectedEmotion] }} className={`block aspect-square opacity-60 rounded-full transition-all-300`} />
          <Motion.div
            key={'start-icon'}
            onClick={startRecording}>
            <StartIcon className={`w-[100px] h-[100px] max-md:w-20 max-md:h-20 max-sm:w-[60px] max-sm:h-[60px] absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%] text-gray opacity-50 hover:opacity-100 transition-all-300`} />
          </Motion.div>
        </div>
      )}

      <div className={`flex flex-col gap-5 items-center`}>
        <ExpressTitle selectedEmotion={selectedEmotion}/>
        <div className={`flex flex-col gap-2 items-center select-none`}>
          <MicrophoneIcon className={`${isRecording ? `text-gray` : `text-light-gray`} w-12 h-12 max-md:w-10 max-md:h-10 transition-all-300`} />
          {isRecording ? (
            <Motion.p key={'recording'} className={`text-[14px] max-md:text-[12px] transition-all-300`}>지금 말하세요!</Motion.p>
          ) : (
            <Motion.p key={'click-mic'} className={`text-[14px] max-md:text-[12px] transition-all-300`}>시작 버튼을 클릭하세요</Motion.p>
          )}
        </div>
      </div>
    </Motion.div>
  )
}