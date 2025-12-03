import axiosInstance from "./axiosInstance";

export const generateQuizResponse = async (useDalle?: boolean) => {
  const { data } = await axiosInstance.get('/quiz/generate', {
    params: { useDalle }
  })
  return data;
}

export const submitQuizAnswer = async (quizId: string, answer: Emotion) => {
  const { data } = await axiosInstance.post('/quiz/submit', {
    quizId,
    userAnswer: answer,
  })
  return data;
}