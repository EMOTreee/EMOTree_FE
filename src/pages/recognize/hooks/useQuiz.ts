import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { generateQuizResponse, submitQuizAnswer } from "../../../apis/quiz";

export const useQuiz = () => {
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [correctEmotion, setCorrectEmotion] = useState<Emotion | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const {
    data: quizData,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['quiz'],
    queryFn: () => generateQuizResponse(),
  });

  const quizId = quizData?.quizId ?? null;
  const quizImageUrl = quizData?.quizImageUrl ?? null;

  const quizMutate = useMutation({
    mutationFn: async ({ quizId, answer }: { quizId: string, answer: Emotion }) => {
      return await submitQuizAnswer(quizId, answer)
    },
    onSuccess: (data) => {
      setIsCorrect(data.isCorrect)
      setCorrectEmotion(data.correctEmotion)
      setFeedback(data.feedback)
    }
  })

  const refetchQuiz = () => {
    setIsCorrect(null);
    setCorrectEmotion(null);
    setFeedback(null);
    refetch()
  }

  return {
    quizId,
    quizImageUrl,
    quizMutate,
    isCorrect,
    correctEmotion,
    feedback,
    isQuizFetching: isFetching,
    refetchQuiz,
  };
};
