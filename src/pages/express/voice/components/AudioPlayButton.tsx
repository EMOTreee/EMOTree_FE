import { useEffect, useRef, useState } from "react";
import { HeadphoneIcon } from "../../../../assets";

export default function AudioPlayButton({ audioURL }: { audioURL: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    const audio = audioRef.current;
    if (!audio) {
      console.log("audioRef가 아직 없음");
      return;
    }

    setIsPlaying(true)
    audio.currentTime = 0;
    audio
      .play()
      .catch((err) => {
        console.error("오디오 재생 실패:", err);
      });
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  }, []);

  if (!audioURL) return null;

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={playAudio}
        className={`${isPlaying ? `text-gray` : `text-light-gray`} hover:text-gray transition-all-300`}
      >
        <HeadphoneIcon className={`w-12 h-12 cursor-none`} />
      </button>

      <audio ref={audioRef} src={audioURL} className="hidden" />
    </div>
  );
}
