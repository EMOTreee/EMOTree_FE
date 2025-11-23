import InfiniteMenu from "../../components/infiniteMenu/InfiniteMenu";
import { ITEMS } from "../../constants/menuItem";
import AnimateContainer from "../../components/common/AnimateContainer";
import Motion from "../../components/motion/Motion";

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