import { AutoHeightTextarea } from "autogrow-input";
import { useEffect, useState } from "react";

type TypingTextProps = {
  text: string;
  speed?: number; 
};

export default function TypingText({ text, speed = 30 }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
  let index = 0;
  setDisplayedText(""); 

  const typingInterval = setInterval(() => {
    if (index < text.length) {
      setDisplayedText(text.slice(0, index + 1));
      index++;
    } else {
      clearInterval(typingInterval);
    }
  }, speed);

  return () => clearInterval(typingInterval);
}, [text, speed]);


  return (
    <div
      className={`resize-none w-full no-scroll cursor-none select-none`} 
      >{displayedText}</div>
  )
}
