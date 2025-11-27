import useAnimateNavigate from "../../../hooks/useAnimateNavigate";

type InfiniteMenuTitleProps = {
  isMoving: boolean;
  title: string;
  link: string;
}

const InfiniteMenuTitle = ({
  isMoving,
  title,
  link,
}: InfiniteMenuTitleProps) => {

  const animateNavigate = useAnimateNavigate();

  return (
    <h2
      className={`
          ${title === 'EMOTree' ? 'font-abel text-[64px] max-md:text-[50px]' : 'text-[32px] max-md:text-[24px] font-bold'} max-xl:text-white
          select-none absolute transform transition-all ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-hover-gray max-xl:hover:text-black top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
          xl:left-1/6 xl:-translate-x-1/2
          ${isMoving
          ? 'opacity-0 pointer-events-none duration-100ms'
          : 'opacity-100 pointer-events-auto duration-500ms'
        }`}
      onClick={() => animateNavigate(link)}>
      <p className={`transition-color-300`}>{title}{title !== 'EMOTree' && '↗'}</p>
      {title === '감정 표현 트레이닝' && (
        <>
          <p className={`text-[20px] max-md:text-[16px] font-semibold text-center pr-4 max-md:pr-3 max-sm:pr-2 transition-color-300`}>
            {link === '/express/expression' ? '- 표정 -' : '- 음성 -'}
          </p>
        </>
      )}
    </h2>
  )
}

export default InfiniteMenuTitle;