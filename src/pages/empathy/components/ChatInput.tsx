import { AutoHeightTextarea } from "autogrow-input"
import { Plane } from "../../../assets"
import { useRef } from "react"

type ChatInputProps = {
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
  sendMessage: (message: string) => void
}

export default function ChatInput({
  text,
  setText,
  sendMessage,
}: ChatInputProps) {

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleContainerClick = () => {
    textareaRef.current?.focus();
  }

  const handleMessage = () => {
    if (text.trim() !== "") {
      sendMessage(text)
      setText("")
    }
  }

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleMessage()
    }
  }

  return (
    <div className={`w-full fixed bottom-0 px-20 pb-10 z-1 select-none`}>
      <div 
        className={`w-full flex flex-row justify-between items-start rounded-[20px] px-4 py-3 border border-gray transition-all-300 bg-white z-1`}
        onClick={handleContainerClick}>
        <AutoHeightTextarea
          minHeight={24}
          maxHeight={200}
          ref={textareaRef}
          className={`w-full placeholder:text-hover-gray text-black outline-none resize-none no-scroll cursor-none overflow-scroll`}
          placeholder={`공감하는 말을 적어보세요`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => handleEnter(e)} />
        <Plane
          className={`w-5 h-5 transition-all-300 z-1 ${text.trim() !== "" ? `text-gray` : `text-light-gray`}`}
          onClick={() => handleMessage()} />
      </div>
    </div>
  )
}