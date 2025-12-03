import { AnimatePresence } from "framer-motion";
import AnimateContainer from "../common/AnimateContainer";
import Motion from "../motion/Motion";

type EmotionSelectWrapperProps = {
  children: React.ReactNode;
  setIsTransitioning: (value: boolean) => void;
  pageKey: string;
  heightFull?: boolean;
  className?: string;
};

export default function EmotionSelectWrapper({
  children,
  setIsTransitioning,
  pageKey,
  heightFull=true,
  className,
}: EmotionSelectWrapperProps) {
  return (
    <AnimateContainer>
      <Motion.div
        key={pageKey}
        className={`w-full ${heightFull ? `h-full justify-center` : ``} flex flex-col items-center ${className}`}>
        <AnimatePresence
          mode="wait"
          onExitComplete={() => setIsTransitioning(false)}>
          {children}
        </AnimatePresence>
      </Motion.div>
    </AnimateContainer>
  );
}
