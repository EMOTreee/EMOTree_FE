import { useState } from "react";
import Graph from "./Graph";

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

  const [currentTab, setCurrentTab] = useState('감정 인지');

  return (
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
      <Graph/>
      <div className={`flex flex-col px-12 pt-5 pb-7 gap-4 min-h-40`}>
        <p className={`w-full text-[20px] font-semibold text-center`}>주간 {currentTab} 레포트</p>
        <p className={`font-text-[16px] medium text-center`}>어쩌구 저쩌구</p>
      </div>
    </div>
  )
}