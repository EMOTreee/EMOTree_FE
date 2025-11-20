import InfiniteMenu from "../components/InfiniteMenu/InfiniteMenu";
import { items } from "../constants/menuItem";
import { motion } from "framer-motion"
import AnimateContainer from "../components/common/AnimateContainer";

export default function Home() {

  return (
    <AnimateContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`h-screen`}>
        <InfiniteMenu items={items} />
      </motion.div>
    </AnimateContainer>
  )
}