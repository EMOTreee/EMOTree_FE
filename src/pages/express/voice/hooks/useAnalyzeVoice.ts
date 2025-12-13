import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { getAnalyzeVoiceResponse } from "../../../../apis/emotion";

export const useAnalyzeVoice = (selectedEmotion: Emotion) => {
  const [feedback, setFeedback] = useState<string | null>(null);

  const { mutate, isPending } = useMutation({
    mutationFn: async (audioBlob: Blob) => {
      const formData = new FormData();
      formData.append("file", audioBlob, "record.wav");
      formData.append("targetEmotion", selectedEmotion);

      return await getAnalyzeVoiceResponse(formData);
    },
    onSuccess: (data) => {
      setFeedback(data.feedback);
    },
    onError: (e) => {
      console.error("에러:", e);
    },
  });


  return {
    analyzeAudio: mutate,
    feedback,
    setFeedback,
    isPending,
  };
};
