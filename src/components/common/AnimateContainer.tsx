import { AnimatePresence } from "framer-motion";
import useNavigateStore from "../../stores/useNavigateStore";

export default function AnimateContainer({ children }: { children: React.ReactNode }) {

  const {
    isNavigating,
  } = useNavigateStore();

  return (
    <AnimatePresence>
      {!isNavigating && ( <> {children} </> )}
    </AnimatePresence>
  )
}