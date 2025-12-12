import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getScenarioResponse, submitEmpathy } from "../../../apis/empathy";

export const useChat = (selectedEmotion: Emotion) => {

  const {
    data: scenarioData,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['scenario', selectedEmotion],
    queryFn: () => getScenarioResponse(selectedEmotion),
    enabled: !!selectedEmotion
  });

  const scenario = scenarioData?.scenario ?? "";
  const [chats, setChats] = useState<Chat[]>([]);

  const addChat = (text: string, isUser: boolean) => {
    return {
      id: crypto.randomUUID(),
      isUser,
      text,
    }
  }

  const empathyMutate = useMutation({
    mutationFn: async ({ scenario, userMessage }: { scenario: string, userMessage: string }) => {
      return await submitEmpathy(selectedEmotion, scenario, userMessage)
    },
    onSuccess: (data) => {
      setChats((prev) => [
        ...prev,
        addChat(data.feedback, false),
      ]);
    }
  })

  const sendMessage = (userMessage: string) => {
    if (!scenario) return;

    setChats((prev) => [
      ...prev,
      addChat(userMessage, true)
    ])
    empathyMutate.mutate({ scenario, userMessage })
  }

  const refetchScenario = () => {
    setChats([])
    refetch({ cancelRefetch: false })
  }

  const scenarioChat: Chat | null = scenario
    ? {
      id: "scenario", // 고정 ID (key용)
      isUser: false,
      text: scenario,
    }
    : null;

  // 실제로 화면에 쓸 chats
  const displayChats = scenarioChat ? [scenarioChat, ...chats] : chats;

  return {
    chats: displayChats,
    setChats,
    scenario,
    isScenarioFetching: isFetching,
    refetchScenario,
    sendMessage,
    isEmpathyPending: empathyMutate.isPending,
  };
};
