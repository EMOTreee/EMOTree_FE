import { GreenLogo } from "../../assets"
import useAnimateNavigate from "../../hooks/useAnimateNavigate";

const Header = () => {

  const animateNavigate = useAnimateNavigate();

  return (
    <header className={`h-20 flex flex-row-reverse w-screen fixed top-0 bg-white px-15 shadow-0-4-20-0 z-200 select-none`}>
      <div className={`flex flex-row items-center`}>
        <div 
          className={`font-abel text-[48px] flex flex-row gap-1 items-center absolute left-1/2 -translate-x-1/2 cursor-pointer`}
          onClick={() => animateNavigate('/')}>
          <GreenLogo className={`h-10 w-8`} />
          <h1>EMOTree</h1>
        </div>
        <p 
          className={`text-[14px] cursor-pointer`}
          onClick={() => animateNavigate('http://localhost:8000/auth/kakao/login')}>카카오 로그인</p>
      </div>
    </header>
  )
}

export default Header;