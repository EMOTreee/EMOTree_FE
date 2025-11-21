import BlobCursor from "../components/common/BlobCursor";
import useBlobCursorStore from "../stores/useBlobCursorStore";
import { useEffect } from "react";
import AnimateContainer from "../components/common/AnimateContainer";
import Motion from "../components/motion/Motion";

export default function BlobCursorLayout() {

  const {
    blobCursorColor,
    setBlobCursorColor,
  } = useBlobCursorStore();

  useEffect(() => {
    return () => {
      setBlobCursorColor('#DBDBDB');
    }
  }, []);

  return (
    <AnimateContainer>
      <Motion.div 
        className="flex h-screen flex-col absolute">
        <div className={`absolute h-screen w-screen`}>
          <BlobCursor
            blobType="circle"
            fillColor={blobCursorColor}
            trailCount={3}
            sizes={[60, 100, 80]}
            innerSizes={[20, 35, 25]}
            innerColor="rgba(0,0,0,0.15)"
            opacities={[0.6, 0.6, 0.6]}
            shadowColor="rgba(0,0,0,0.15)"
            shadowBlur={20}
            shadowOffsetX={15}
            shadowOffsetY={15}
            filterStdDeviation={20}
            useFilter={true}
            fastDuration={0.1}
            slowDuration={0.5}
            zIndex={200}
          />
        </div>
      </Motion.div>
    </AnimateContainer>
  )
}