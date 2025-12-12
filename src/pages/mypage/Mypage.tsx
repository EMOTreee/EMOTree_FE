import AnimateContainer from "../../components/common/AnimateContainer";
import Motion from "../../components/motion/Motion";
import useUserStore from "../../stores/useUserStore";
import Growth from "./components/Growth";

export default function Mypage() {

  const {
    user
  } = useUserStore()

  return (
    <AnimateContainer>
      <Motion.div className={`w-screen h-screen responsive-p-t pb-10 px-25 flex flex-col select-none`}>
        <div className={`flex flex-col justify-center items-center gap-7 h-full py-15`}>
          <p className={`text-[28px]`}><span className={`font-bold`}>{user?.name}</span> 님의 성장 기록</p>
          <Growth />
        </div>
      </Motion.div>
    </AnimateContainer>
  )
}