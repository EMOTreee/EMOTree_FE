import { useEffect, useRef, useState } from "react";
import EmotionSelect from "../../components/emotionSelect/EmotionSelect";
import Motion from "../../components/motion/Motion";
import EmotionSelectWrapper from "../../components/emotionSelect/EmotionSelectWrapper";
import Chat from "./components/Chat";
import EmpathyTitle from "./components/EmpathyTitle";
import ChatInput from "./components/ChatInput";
import { CHATS } from "../../mocks/chat";

export default function Empathy() {

  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [text, setText] = useState("");

  const [chats, setChats] = useState(CHATS);

  const chatWrapperRef = useRef<HTMLDivElement>(null);

  const handleEmotionSelect = (selectedEmotion: Emotion | null) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedEmotion(selectedEmotion);
    }, 0);
  }

  useEffect(() => {
    return () => {
      setSelectedEmotion(null);
    }
  }, []);

  const sendMessage = (chat: Chat) => {
    setChats((prev) => [
      ...prev,
      { id: prev.length + 1, isUser: chat.isUser, text: chat.text }
    ])
  }

  useEffect(() => {
    chatWrapperRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chats])

  return (
    <EmotionSelectWrapper
      setIsTransitioning={setIsTransitioning}
      pageKey={'empathy'}>
      {selectedEmotion === null && (
        <EmotionSelect
          handleEmotionSelect={handleEmotionSelect}
          title={"어떤 감정에 공감해 볼까요?"}
          enableRandom
          isTransitioning={isTransitioning} />
      )}

      {selectedEmotion !== null && (
        <Motion.div
          key="empathy-chat"
          className={`w-full h-full responsive-p-t px-20 pb-[60px] flex flex-col items-center justify-start gap-10`}>

          <div className={`w-full h-full flex flex-col gap-5 no-scroll overflow-scroll z-1`}>
            <EmpathyTitle emotion={selectedEmotion} />
            {chats.map((chat) => (
              <Chat
                key={chat.id}
                text={chat.text}
                emotion={selectedEmotion}
                isUser={chat.isUser} />
            ))}
            <div ref={chatWrapperRef} className={`h-8 shrink-0`}/>
          </div>

          <ChatInput
            text={text}
            setText={setText}
            sendMessage={sendMessage}
          />
        </Motion.div>
      )}
    </EmotionSelectWrapper>
  )
}