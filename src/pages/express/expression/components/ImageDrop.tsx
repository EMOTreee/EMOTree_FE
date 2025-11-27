import { useCallback, useState } from "react";
import { DragImage } from "../../../../assets";
import Motion from "../../../../components/motion/Motion";

type ImageDropProps = {
  imageUrl: string | null
  setImageUrl: React.Dispatch<React.SetStateAction<string | null>>
}

export default function ImageDrop({
  imageUrl,
  setImageUrl,
}: ImageDropProps ) {
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = useCallback((files: FileList | null) => {
    if (!files || files.length === 0) return;

    const file = files[0];
    const url = URL.createObjectURL(file);
    setImageUrl(url);
  }, [setImageUrl]);

  return (
    <Motion.div key={'IMAGE'}>

      {imageUrl ? (
        <img src={imageUrl} className={`object-cover w-[400px] h-[400px] rounded-full`} />
      ) : (
        <DragImage
          className={`w-[400px] h-[400px] ${isDragging ? "text-gray" : "text-light-gray"} hover:text-gray transition-all-300`}
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
        onChange={(e) => handleFiles(e.target.files)}/>
    </Motion.div>
  )
}