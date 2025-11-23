import { AnimatePresence } from "framer-motion";
import AnimateContainer from "../common/AnimateContainer";
import Motion from "../motion/Motion";

type EmotionSelectWrapperProps = {
  children: React.ReactNode;
  setIsTransitioning: (value: boolean) => void;
  pageKey: string;
};

export default function EmotionSelectWrapper({
  children,
  setIsTransitioning,
  pageKey,
}: EmotionSelectWrapperProps) {
  return (
    <AnimateContainer>
      <Motion.div
        key={pageKey}
        className="w-full h-full flex flex-col items-center justify-center">
        <AnimatePresence
          mode="wait"
          onExitComplete={() => setIsTransitioning(false)}>
          {children}
        </AnimatePresence>
      </Motion.div>
    </AnimateContainer>
  );
}
