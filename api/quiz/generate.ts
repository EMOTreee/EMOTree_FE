import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  
  if (req.method === 'OPTIONS') return res.status(200).end()

  const quizs = [
    { quizId: "JOY", quizImageUrl: "/mock/JOY.png" },
    { quizId: "SADNESS", quizImageUrl: "/mock/SADNESS.png" },
    { quizId: "ANGER", quizImageUrl: "/mock/ANGER.png" },
    { quizId: "SURPRISE", quizImageUrl: "/mock/SURPRISE.png" },
    { quizId: "ANXIETY", quizImageUrl: "/mock/ANXIETY.png" },
  ]
  const quiz = quizs[Math.floor(Math.random() * quizs.length)]

  res.status(200).json(quiz)
}
