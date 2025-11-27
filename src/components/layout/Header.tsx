import { useNavigate } from "react-router-dom";
import { GreenLogo } from "../../assets"
import useAnimateNavigate from "../../hooks/useAnimateNavigate";
import useUserStore from "../../stores/useUserStore";
import { useEffect } from "react";
import { getUserResponse, getLogoutResponse } from "../../apis/user";
import Motion from "../motion/Motion";

const Header = () => {

  const {
    isLoggedIn,
    setUser,
  } = useUserStore();

  const animateNavigate = useAnimateNavigate();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await getLogoutResponse()
    setUser(null)
  }

  useEffect(() => {

    const getUser = async () => {
      const data = await getUserResponse()

      if (data.detail === null) {
        setUser({
          name: data.name,
          email: data.email,
        })
      } else setUser(null)
    }

    getUser()

  }, [])

  return (
    <header className={`h-20 max-md:h-16 flex flex-row-reverse w-screen fixed top-0 bg-white px-15 max-md:px-6 shadow-0-4-20-0 z-200 select-none transition-height-300`}>
      <Motion.div className={`flex flex-row w-full items-center justify-between md:flex-row-reverse`}>
        <div
          className={`font-abel text-[48px] max-md:text-[32px] flex flex-row gap-1 items-center md:absolute md:left-1/2 md:-translate-x-1/2 hover:text-logo-green transition-all-300`}
          onClick={() => animateNavigate('/')}>
          <GreenLogo className={`h-10 w-8 max-md:h-8 max-md:w-6`} />
          <h1>EMOTree</h1>
        </div>
        {isLoggedIn ? (
          <Motion.div
            className={`flex flex-row gap-4`}>
            <p
              className={`text-[14px] hover:text-hover-gray transition-all-300 font-medium`}
              onClick={() => animateNavigate('/mypage')}>마이페이지</p>
            <p
              className={`text-[14px] hover:text-hover-gray transition-all-300 font-medium`}
              onClick={handleLogOut}>로그아웃</p>
          </Motion.div>
        ) : (
          <Motion.p
            className={`text-[14px] max-md:text-[12px] hover:text-hover-gray transition-all-300 font-medium`}
            onClick={() => navigate('http://localhost:8000/auth/kakao/login')}>카카오 로그인</Motion.p>
        )}
      </Motion.div>
    </header>
  )
}

export default Header;