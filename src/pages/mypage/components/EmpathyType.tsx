import { motion } from "framer-motion"
import { useSpring, animated, easings } from "react-spring"

type EmpathyTypeProps = {
  userName: string | null | undefined;
  empathyType: {
    type: "EMOTIONAL" | "COGNITIVE";
    ratios: {
      emotional: number;
      cognitive: number;
    };
  }
}

export default function EmpathyType({
  userName,
  empathyType,
}: EmpathyTypeProps) {

  const emotionalRatio = empathyType?.ratios.emotional * 100 | 0
  const cognitiveRatio = empathyType?.ratios.cognitive * 100 | 0

  const emotionalSpring = useSpring({ from: { val: 0 }, val: emotionalRatio, config: { duration: 500, easing: easings.easeInOutCubic } });
  const cognitiveSpring = useSpring({ from: { val: 0 }, val: cognitiveRatio, config: { duration: 500, easing: easings.easeInOutCubic } });


  return (
    <div className={`flex flex-row gap-5 justify-center items-center px-5 py-2.5`}>
      <p className={`w-fit shrink-0 text-gray text-[20px] font-semibold`}>
        {userName} 님의 공감 유형
      </p>
      <div className={`flex flex-col w-full h-full overflow-hidden gap-1`}>
        <div className={`flex flex-row w-full h-full min-h-4 rounded-md overflow-hidden`}>
          <motion.div
            className={`rounded-l-md opacity-60 bg-purple h-full flex justify-center items-center font-semibold`}
            initial={{ width: 0 }}
            animate={{ width: `${emotionalRatio}%` }}
            transition={{ duration: 0.5 }}>
          </motion.div>
          <motion.div
            className={`rounded-r-md opacity-60 bg-yellow h-full flex justify-center items-center font-semibold`}
            initial={{ width: 0 }}
            animate={{ width: `${cognitiveRatio}%` }}
            transition={{ duration: 0.5 }}>
          </motion.div>
        </div>
        <div className={`flex flex-row gap-4`}>
          <div className={`flex flex-row`}>
            <div className={`aspect-square h-full p-1`}>
              <div className={`aspect-square h-full bg-purple opacity-60`} />
            </div>
            <p className={`text-[12px]`}>
              감정 공감: <animated.span>{emotionalSpring.val.to(v => Math.floor(v))}</animated.span>%
            </p>
          </div>
          <div className={`flex flex-row`}>
            <div className={`aspect-square h-full p-1`}>
              <div className={`aspect-square h-full bg-yellow opacity-60`} />
            </div>
            <p className={`text-[12px]`}>
              인지 공감: <animated.span>{cognitiveSpring.val.to(v => Math.floor(v))}</animated.span>%
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}