import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getScenarioResponse, submitEmpathy } from "../../../apis/empathy";

export const useChat = (selectedEmotion: Emotion) => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [scenario, setScenario] = useState("");

  const scenarioQuery = useQuery({
    queryKey: ['scenario', selectedEmotion],
    queryFn: () => getScenarioResponse(selectedEmotion),
    enabled: !!selectedEmotion
  });

  useEffect(() => {
    if (scenarioQuery.data) {
      setScenario(scenarioQuery.data.scenario)
      setChats([
        {
          id: Date.now(),
          isUser: false,
          text: scenarioQuery.data.scenario
        }
      ]);
    }
  }, [scenarioQuery.data]);


  const empathyMutate = useMutation({
    mutationFn: async ({ scenario, userMessage }: { scenario: string, userMessage: string }) => {
      return await submitEmpathy(scenario, userMessage)
    },
    onSuccess: (data) => {
      console.log(data)
      setChats((prev) => [
        ...prev,
        {
          id: Date.now(),
          isUser: false,
          text: data.feedback
        }
      ]);
    }
  })

  const sendMessage = (scenario: string, userMessage: string) => {
    setChats((prev) => [
      ...prev,
      {
        id: Date.now(),
        isUser: true,
        text: userMessage
      }
    ])
    empathyMutate.mutate({ scenario, userMessage })
  }

  const refetchScenario = () => {
    setChats([])
    setScenario("")
    scenarioQuery.refetch({ cancelRefetch: false })
  }

  return {
    chats,
    setChats,
    scenario,
    setScenario,
    isScenarioPending: scenarioQuery.isFetching,
    refetchScenario,
    sendMessage,
    isEmpathyPending: empathyMutate.isPending,
  };
};
