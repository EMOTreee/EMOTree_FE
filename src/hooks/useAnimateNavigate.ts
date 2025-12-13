import { useNavigate } from "react-router-dom"
import useNavigateStore from "../stores/useNavigateStore";

const useAnimateNavigate = () => {

  const {
    setIsNavigating
  } = useNavigateStore();

  const navigate = useNavigate();

  const animateNavigate = (to: string) => {
    setIsNavigating(true);
    setTimeout(() => {
      navigate(to);
      setTimeout(() => {
        setIsNavigating(false);
      }, 10);
    }, 300);
  }

  return (
    animateNavigate
  )
}

export default useAnimateNavigate