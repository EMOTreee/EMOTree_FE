import { useEffect, useRef, useState } from "react";

type TypingTextProps = {
  text: string;
  speed?: number;
  loop?: boolean;
  className?: string;
};

export default function TypingText({ text, speed = 30, loop = false, className }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    let interval: number;

    const startTyping = () => {
      interval = setInterval(() => {
        const index = indexRef.current;

        if (!isDeleting) {
          // 타이핑 중
          if (index < text.length) {
            setDisplayedText(text.slice(0, index + 1));
            indexRef.current++;
          } else {
            if (loop) {
              // 타이핑 완료 → 삭제 모드 전환
              setTimeout(() => {
                setIsDeleting(true);
              }, 1000);
            } else {
              clearInterval(interval);
            }
          }
        } else {
          // 삭제 중
          if (index > 0) {
            setDisplayedText(text.slice(0, index - 1));
            indexRef.current--;
          } else {
            // 삭제 완료 → 다시 타이핑
            setTimeout(() => {
              setIsDeleting(false);
            }, 1000);
          }
        }
      }, isDeleting ? speed / 1.5 : speed);
    };

    startTyping();

    return () => clearInterval(interval);
  }, [text, speed, loop, isDeleting]);


  return (
    <div
      className={`resize-none w-full no-scroll cursor-none select-none ${className}`}
    >{displayedText} </div>
  )
}
