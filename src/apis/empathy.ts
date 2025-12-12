import axiosInstance from "./axiosInstance"

export const getScenarioResponse = async (
  option: Emotion
) => {
  const { data } = await axiosInstance.get('/empathy/scenario', {
    params: { option }
  })
  return data;
}

export const submitEmpathy = async (
  emotion: Emotion,
  scenario: string, 
  userMessage: string
) => {
  const { data } = await axiosInstance.post('/empathy/submit', {
    emotion,
    scenario,
    userMessage,
  })
  return data
}