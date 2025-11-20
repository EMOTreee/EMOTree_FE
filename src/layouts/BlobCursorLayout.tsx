import { Outlet } from "react-router-dom";
import BlobCursor from "../components/common/BlobCursor";
import useBlobCursorStore from "../stores/useblobCursorStore";
import { useEffect } from "react";
import AnimateContainer from "../components/common/AnimateContainer";
import { motion } from "framer-motion";

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
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex h-screen flex-col relative">
        <Outlet />
        <div className={`absolute h-screen w-screen -z-10`}>
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
            zIndex={0}
          />
        </div>
      </motion.div>
    </AnimateContainer>
  )
}