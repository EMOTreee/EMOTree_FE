import { ITEMS } from "../../constants/menuItem";
import AnimateContainer from "../../components/common/AnimateContainer";
import Motion from "../../components/motion/Motion";
import InfiniteMenu from "./components/InfiniteMenu";

export default function Home() {

  return (
    <AnimateContainer>
      <Motion.div
        key={'home'}
        className={`h-screen`}>
        <InfiniteMenu items={ITEMS} />
      </Motion.div>
    </AnimateContainer>
  )
}