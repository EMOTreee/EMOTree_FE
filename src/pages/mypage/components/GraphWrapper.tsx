import Motion from "../../../components/motion/Motion";
import Graph from "./Graph";

type GraphWrapperProps = {
  data: GrowthData;
  currentTab: string;
  monthlyReport: string;
}

export default function GraphWrapper({
  data,
  currentTab,
  monthlyReport,
}: GraphWrapperProps) {

  console.log(data)
  return (
    <Motion.div
      className={`flex flex-col h-full`}>
      <Graph data={data} />
      <div className={`flex flex-col px-12 pt-5 pb-7 gap-4 min-h-40`}>
        <p className={`w-full text-[20px] font-semibold text-center`}>월간 {currentTab} 레포트</p>
        <p className={`text-[14px] medium text-center`}>{monthlyReport}</p>
      </div>
    </Motion.div>
  )
}