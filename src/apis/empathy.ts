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
  scenario: string, 
  userMessage: string
) => {
  const { data } = await axiosInstance.post('/empathy/submit', {
    scenario,
    userMessage,
  })
  return data
}