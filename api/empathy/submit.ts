import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  return res.status(200).json({
    feedback:
      "지금 네 공감 표현 아주 정확했어요. 감정을 있는 그대로 인정해주면서도 안정감을 주는 방식이 좋았습니다.",
  });
}
