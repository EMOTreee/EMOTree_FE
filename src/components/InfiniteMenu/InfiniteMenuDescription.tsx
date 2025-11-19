type InfiniteMenuDescriptionProps = {
  isMoving: boolean;
  description: string;
}

const InfiniteMenuDescription = ({
  isMoving,
  description,
}: InfiniteMenuDescriptionProps) => {

  return (
    <p
      className={`
          select-none
          absolute
          w-[15%]
          text-[16px]
          top-1/2
          -translate-y-1/2
          right-1/6
          translate-x-1/2
          transition-all
          ease-[cubic-bezier(0.25,0.1,0.25,1.0)]
          ${isMoving
          ? 'opacity-0 pointer-events-none duration-100ms'
          : 'opacity-100 pointer-events-auto duration-500ms'
        }`}>
      {description}
    </p>
  )
}

export default InfiniteMenuDescription;