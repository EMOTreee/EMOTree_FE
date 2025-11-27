import { useEffect, useRef } from "react";
import Motion from "../../../../components/motion/Motion";
import { AnimatePresence } from "framer-motion";
import { CameraIcon } from "../../../../assets";

type CameraCaptureProps = {
  setCurrentMode: React.Dispatch<React.SetStateAction<"CAMERA" | "IMAGE">>
  setHasCamera: React.Dispatch<React.SetStateAction<boolean>>
  imageUrl: string | null
  setImageUrl: React.Dispatch<React.SetStateAction<string | null>>
  photo: string | null
  setPhoto: React.Dispatch<React.SetStateAction<string | null>>
}

export default function CameraCapture({
  setCurrentMode,
  setHasCamera,
  imageUrl,
  setImageUrl,
  photo,
  setPhoto,
}: CameraCaptureProps) {

  const videoRef = useRef<HTMLVideoElement>(null);
  const photoRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let stream: MediaStream | null = null;
  let intervalId: number;

    const connectCamera = async () => {
      try {
        if (!videoRef.current) {
          intervalId = setInterval(async () => {
            if (videoRef.current) {
              clearInterval(intervalId);

              stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false,
              });

              videoRef.current.srcObject = stream;
            }
          }, 100);
        } else {
          stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false,
          });

          videoRef.current.srcObject = stream;
        }
      } catch {
        setHasCamera(false);
        setCurrentMode("IMAGE");
      }
    };

    connectCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [photo, imageUrl, videoRef]);

  const handleCapture = () => {
    if (!videoRef.current || !photoRef.current) {
      return;
    }

    const $canvas = photoRef.current;
    const $video = videoRef.current;

    const context = $canvas.getContext('2d');
    if (!context) {
      return;
    }

    $canvas.width = $video.videoWidth;
    $canvas.height = $video.videoHeight;

    context.drawImage($video, 0, 0, $canvas.width, $canvas.height);

    $canvas.toBlob((blob) => {
      if (!blob) return;

      const url = URL.createObjectURL(blob);

      setPhoto(url);
      setImageUrl(url);

    }, "image/png");
  };

  return (
    <Motion.div key={'CAMERA'} className={`w-[400px] h-[400px] rounded-full select-none`}>
      <AnimatePresence mode="wait">
        {!photo ? (
          <Motion.div key={'video'} className={`relative`}>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className={`w-[400px] h-[400px] object-cover rounded-full`} />
            <div
              className={`w-[400px] h-[400px] rounded-full hover:opacity-30 opacity-0 bg-white absolute top-0 left-0 transition-all-300 flex justify-center items-center`}
              onClick={handleCapture} >
              <CameraIcon className={`w-20 h-20 text-gray`} />
            </div>
            <canvas
              ref={photoRef}
              className={`hidden`} />
          </Motion.div>
        ) : (
          <Motion.div key={'image'}>
            <img src={photo} className={`w-[400px] h-[400px] object-cover rounded-full pointer-events-none`} />
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.div>
  )
}