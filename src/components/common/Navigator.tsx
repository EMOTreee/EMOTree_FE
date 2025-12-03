import { BackspaceIcon, HomeIcon, RetryIcon } from "../../assets";
import useAnimateNavigate from "../../hooks/useAnimateNavigate";

type NavigatorProps = {
  handleBackspace?: () => void
  handleRetry: () => void
  noneBackspace?: boolean;
}

export default function Navigator({
  handleBackspace = () => {},
  handleRetry,
  noneBackspace,
}: NavigatorProps ) {

  const iconStyle = `w-8 h-8 opacity-30 hover:opacity-100 transition-all-300`

  const animateNavigate = useAnimateNavigate();

  return (
    <div className={`flex flex-row justify-center gap-5 z-1`}>
      {!noneBackspace && <BackspaceIcon className={`${iconStyle}`} onClick={handleBackspace} />}
      <RetryIcon className={`${iconStyle}`} onClick={handleRetry} />
      <HomeIcon className={`${iconStyle}`} onClick={() => animateNavigate('/')} />
    </div>
  )
}