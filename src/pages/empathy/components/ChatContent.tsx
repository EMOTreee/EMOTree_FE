import { useEffect, useRef, useState } from "react";
import Motion from "../../../components/motion/Motion";
import Chat from "./Chat";
import ChatInput from "./ChatInput";
import EmpathyTitle from "./EmpathyTitle";
import { useChat } from "../hooks/useChat";
import Navigator from "../../../components/common/Navigator";
import { AnimatePresence } from "framer-motion";

type ChatContentProps = {
  selectedEmotion: Emotion
  setSelectedEmotion: React.Dispatch<React.SetStateAction<Emotion | null>>
}

export default function ChatContent({
  selectedEmotion,
  setSelectedEmotion,
}: ChatContentProps) {

  const [text, setText] = useState("");
  const chatWrapperRef = useRef<HTMLDivElement>(null);

  const {
    chats,
    scenario,
    isScenarioPending,
    refetchScenario,
    sendMessage,
    isEmpathyPending
  } = useChat(selectedEmotion);

  const handleBackspace = () => {
    setSelectedEmotion(null)
  }

  const handleRetry = () => {
    refetchScenario();
  }

  useEffect(() => {
    chatWrapperRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chats])

  return (
    <Motion.div
      className={`w-full h-full responsive-p-t px-20 pb-[60px] flex flex-col items-center justify-start gap-10`}>
      <AnimatePresence>
        <div className={`w-full h-full flex flex-col gap-5 no-scroll overflow-scroll z-1`}>
          <EmpathyTitle emotion={selectedEmotion} />
          {isScenarioPending ? (
            <Chat
              text={'시나리오 생성 중'}
              emotion={selectedEmotion}
              isUser={false}
              isPending />
          ) : (
            chats.map((chat) => (
              <Chat
                key={chat.id}
                text={chat.text}
                emotion={selectedEmotion}
                isUser={chat.isUser} />
            )))}

          {isEmpathyPending &&
            <Chat
              text={'피드백 생성 중'}
              emotion={selectedEmotion}
              isUser={false}
              isPending />}
          {scenario && !isScenarioPending && !isEmpathyPending &&
            <Navigator
              handleBackspace={handleBackspace}
              handleRetry={handleRetry} />
          }
          <div ref={chatWrapperRef} className={`h-8 shrink-0`} />
        </div>
      </AnimatePresence>

      <ChatInput
        text={text}
        setText={setText}
        sendMessage={() => sendMessage(scenario, text)}
      />
    </Motion.div>
  )
}