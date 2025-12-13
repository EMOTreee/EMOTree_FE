import axiosInstance from "./axiosInstance"

export const getAnalyzeExpressionResponse = async (
  formData: FormData
) => {
  const { data } = await axiosInstance.post('/emotion-expression/image', formData)
  return data
}


export const getAnalyzeVoiceResponse = async (
  formData: FormData
) => {
  const { data } = await axiosInstance.post('/emotion-expression/voice', formData)
  return data
}