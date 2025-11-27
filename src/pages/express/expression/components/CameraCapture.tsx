import { useEffect, useRef } from "react";
import Motion from "../../../../components/motion/Motion";
import { AnimatePresence } from "framer-motion";
import { CameraIcon } from "../../../../assets";
import { useResponsiveSize } from "../../../../hooks/useResponiveSize";

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

  const size = useResponsiveSize(0.4, 250, 400)

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
          setHasCamera(true);
          videoRef.current.srcObject = stream;
        }
      } catch(e) {
        alert(e)
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
    <Motion.div key={'CAMERA'} className={`rounded-full select-none transition-all-300`} style={{ width: size, height: size }}>
      <AnimatePresence mode="wait">
        {!photo ? (
          <Motion.div key={'video'} className={`relative w-full h-full`}>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className={`w-full h-full object-cover rounded-full`} />
            <div
              className={`w-full h-full rounded-full hover:opacity-30 opacity-0 bg-white absolute top-0 left-0 transition-all-300 flex justify-center items-center`}
              onClick={handleCapture} >
              <CameraIcon className={`w-20 h-20 text-gray`} />
            </div>
            <canvas
              ref={photoRef}
              className={`hidden`} />
          </Motion.div>
        ) : (
          <Motion.div key={'image'} className={`w-full h-full`}>
            <img
              src={photo}
              className={`object-cover rounded-full aspect-square pointer-events-none`}
            />
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.div>
  )
}