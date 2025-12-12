import { motion } from "framer-motion"

type EmpathyTypeProps = {
  userName: string | null | undefined;
  empathyType: {
    type: "EMOTIONAL" | "COGNITIVE";
    ratio: number;
  }
}

export default function EmpathyType({
  userName,
  empathyType,
}: EmpathyTypeProps) {

  const emotionalRatio = empathyType?.type === "EMOTIONAL" ? empathyType?.ratio * 100 : 100 - empathyType?.ratio * 100
  const cognitiveRatio = empathyType?.type === "COGNITIVE" ? empathyType?.ratio * 100 : 100 - empathyType?.ratio * 100


  console.log(cognitiveRatio)

  return (
    <div className={`flex flex-row gap-5 justify-center items-center px-5 py-2.5`}>
      <p className={`w-fit shrink-0 text-gray text-[20px] font-semibold`}>
        {userName} 님의 공감 유형
      </p>
      <div className={`flex flex-col w-full h-full overflow-hidden gap-1`}>
        <div className={`flex flex-row w-full h-full min-h-4`}>
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
            <p className={`text-[12px]`}>감정 공감 {emotionalRatio}%</p>
          </div>
          <div className={`flex flex-row`}>
            <div className={`aspect-square h-full p-1`}>
              <div className={`aspect-square h-full bg-yellow opacity-60`} />
            </div>
            <p className={`text-[12px]`}>인지 공감 {cognitiveRatio}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}