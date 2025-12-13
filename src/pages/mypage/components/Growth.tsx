import { useEffect, useState } from "react";
import { useGrowth } from "../hooks/useGrowth";
import { AnimatePresence } from "framer-motion";
import GraphWrapper from "./GraphWrapper";
import useUserStore from "../../../stores/useUserStore";
import EmpathyType from "./EmpathyType";
import useAnimateNavigate from "../../../hooks/useAnimateNavigate";
import Motion from "../../../components/motion/Motion";

const TABS = [
  {
    title: '감정 인지'
  },
  {
    title: '감정 공감'
  },
  {
    title: '감정 표현'
  },
]

export default function Growth() {

  const {
    interpretGrowthList,
    empathyGrowthList,
    expressGrowthList,
    monthlyReport,
    empathyType,
    isError,
  } = useGrowth();

  const {
    user,
    setUser,
    isLoading,
  } = useUserStore();

  const [currentTab, setCurrentTab] = useState('감정 인지');

  const animateNavigate = useAnimateNavigate();

  useEffect(() => {
    if ((isError && !isLoading)) {
      setUser(null)
      animateNavigate('/')
    }
  }, [isError, isLoading])

  return (
    user &&
    <Motion.div className={`w-screen h-screen responsive-p-t pb-10 px-25 flex flex-col select-none`}>
      <div className={`flex flex-col justify-center items-center gap-7 h-full py-15`}>
        <p className={`text-[28px]`}><span className={`font-bold`}>{user?.name}</span> 님의 성장 기록</p>
        <div className={`w-full h-full flex flex-col gap-2`}>
          <EmpathyType userName={user?.name} empathyType={empathyType} />
          <div className={`w-full h-full rounded-[20px] border border-gray cursor-none`}>
            <div className={`w-full h-full flex flex-col`}>
              <div className={`flex flex-row justify-around text-[20px] font-semibold`}>
                {TABS.map((tab) => (
                  <p
                    key={tab.title}
                    className={`py-2.5 w-full text-center ${currentTab === tab.title ? `opacity-100` : `opacity-30`} transition-all-300`}
                    onMouseEnter={() => setCurrentTab(tab.title)}
                    onPointerEnter={() => setCurrentTab(tab.title)}>{tab.title}</p>
                ))}
              </div>
              <AnimatePresence mode="wait">
                {currentTab === "감정 인지" &&
                  <GraphWrapper
                    key={"recognize"}
                    data={interpretGrowthList}
                    currentTab={currentTab}
                    monthlyReport={monthlyReport?.interpret} />
                }
                {currentTab === "감정 공감" &&
                  <GraphWrapper
                    key={"empathy"}
                    data={empathyGrowthList}
                    currentTab={currentTab}
                    monthlyReport={monthlyReport?.empathy} />
                }
                {currentTab === "감정 표현" &&
                  <GraphWrapper
                    key={"express"}
                    data={expressGrowthList}
                    currentTab={currentTab}
                    monthlyReport={monthlyReport?.express} />
                }
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </Motion.div>
  )
}