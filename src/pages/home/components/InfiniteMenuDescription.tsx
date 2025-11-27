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
          select-none absolute text-[18px] transition-all ease-[cubic-bezier(0.25,0.1,0.25,1.0)] text-center text-gray pointer-events-none
          xl:w-[15%] xl:right-1/6 xl:translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2
          max-xl:bottom-1/12 max-xl:left-1/2 max-xl:-translate-x-1/2
          max-md:text-[16px] max-sm:bottom-1/6 max-sm:text-[12px]
          ${isMoving
          ? 'opacity-0 pointer-events-none duration-100ms'
          : 'opacity-100 pointer-events-auto duration-500ms'
        }`}>
      {description}
    </p>
  )
}

export default InfiniteMenuDescription;