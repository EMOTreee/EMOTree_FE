type InfiniteMenuButtonProps = {
  isMoving: boolean;
  onClick: () => void;
}

const InfiniteMenuButton = ({
  isMoving,
  onClick,
}: InfiniteMenuButtonProps) => {

  return (
    <div
      onClick={onClick}
      className={`
          absolute 
          left-1/2 
          z-10 
          w-[60px] 
          h-[60px] 
          grid 
          place-items-center 
          bg-[#5227ff] 
          border-[5px] 
          border-black
          rounded-full 
          cursor-pointer 
          transition-all 
          ease-[cubic-bezier(0.25,0.1,0.25,1.0)] 
          ${isMoving
          ? 'bottom-[5%] opacity-0 pointer-events-none duration-100ms scale-0 -translate-x-1/2'
          : 'bottom-[12%] opacity-100 pointer-events-auto duration-500ms scale-100 -translate-x-1/2'
        }`}>
      <p className="select-none relative text-white top-0.5 text-[30px]">&#x2197;</p>
    </div>
  )
}

export default InfiniteMenuButton;