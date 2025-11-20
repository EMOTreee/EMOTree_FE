import useAnimateNavigate from "../../hooks/useAnimateNavigate";

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
          ${title === 'EMOTree' ? 'font-abel text-[4rem]' : 'text-[2rem] font-bold cursor-pointer'}
          select-none
          absolute
          top-1/2
          -translate-y-1/2
          left-1/6
          -translate-x-1/2
          transform
          transition-all
          ease-[cubic-bezier(0.25,0.1,0.25,1.0)]
          ${isMoving
          ? 'opacity-0 pointer-events-none duration-100ms'
          : 'opacity-100 pointer-events-auto duration-500ms'
        }`}
      onClick={() => animateNavigate(link)}>
      <p>{title}{title !== 'EMOTree' && '↗'}</p>
      {title === '감정 표현 트레이닝' && (
        <>
          <p className={`text-[20px] font-semibold text-center pr-4`}>
            {link === '/express/expression' ? '- 표정 -' : '- 음성 -'}
          </p>
        </>
      )}
    </h2>
  )
}

export default InfiniteMenuTitle;