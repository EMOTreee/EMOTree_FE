import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  return res.status(200).json({
    nickname: '이준희',
    email: 'example@daum.net'
  });
}
