import { useCallback, useEffect, useState } from "react";
import { DragImage } from "../../../../assets";
import Motion from "../../../../components/motion/Motion";
import { useResponsiveSize } from "../../../../hooks/useResponiveSize";

type ImageDropProps = {
  imageUrl: string | null
  setImageUrl: React.Dispatch<React.SetStateAction<string | null>>
}

export default function ImageDrop({
  imageUrl,
  setImageUrl,
}: ImageDropProps) {

  const size = useResponsiveSize(0.4, 250, 400)

  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = useCallback((files: FileList | null) => {
    if (!files || files.length === 0) return;

    const file = files[0];
    const url = URL.createObjectURL(file);
    setImageUrl(url);
  }, [setImageUrl]);

  return (
    <Motion.div key={'IMAGE'} className={`flex justify-center items-center`}>

      {imageUrl ? (
        <img
          src={imageUrl}
          className={`object-cover aspect-square rounded-full`}
          style={{ width: size, height: size }} />
      ) : (
        <DragImage
          className={`aspect-square ${isDragging ? "text-gray" : "text-light-gray"} hover:text-gray transition-all-300`}
          style={{ width: size, height: size }}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            handleFiles(e.dataTransfer.files);
          }}
          onClick={() => document.getElementById("fileInput")?.click()} />
      )}
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        className={`hidden`}
        onChange={(e) => handleFiles(e.target.files)} />
    </Motion.div>
  )
}