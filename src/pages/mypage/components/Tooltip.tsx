type TooltipProps = {
  seriesId: string
  color: string
  month: string
  value: string | number
}

export default function Tooltip({
  seriesId,
  color,
  month,
  value,
}: TooltipProps) {
  return (
    <div className={`rounded-sm p-0.5 bg-white shadow-0-2-4-0 flex flex-col gap-1 items-center justify-center px-2 py-1`}>
      <div className={`flex flex-row gap-1 items-center justify-center text-[12px]`}>
        <span className={`w-3 h-3`} style={{ backgroundColor: color }} />
        <p className={`font-bold`}>{seriesId}</p>
      </div>
      <div className={`flex flex-row items-center gap-1 justify-center text-[10px]`}>
        <p className={``}>{month}</p>
        <span className={`text-gray`}>|</span>
        <p>{value}</p>
      </div>
    </div>
  )
}