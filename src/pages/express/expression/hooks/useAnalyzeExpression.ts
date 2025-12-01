import { useEffect, useState } from "react";
import blobURLtoFile from "../../../../util/DataURLtoFile";
import { useMutation } from "@tanstack/react-query";
import { getAnalyzeExpressionResponse } from "../../../../apis/emotion";

export const useAnalyzeExpression = (selectedEmotion: Emotion) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ imageUrl }: { imageUrl: string }) => {
      const file = await blobURLtoFile(imageUrl, "image.png");
      const formData = new FormData();
      formData.append("file", file);
      formData.append("targetEmotion", selectedEmotion);
      return await getAnalyzeExpressionResponse(formData);
    },
    onSuccess: (data) => {
      setFeedback(data.feedback);
      console.log("결과:", data);
    },
    onError: (e) => {
      console.error("에러:", e);
    },
  });

  // imageUrl이 바뀌면 자동으로 mutate
  useEffect(() => {
    if (imageUrl) {
      mutate({ imageUrl });
    }
  }, [imageUrl]);

  return {
    imageUrl,
    setImageUrl,
    photo,
    setPhoto,
    feedback,
    setFeedback,
    isPending,
  };
};
