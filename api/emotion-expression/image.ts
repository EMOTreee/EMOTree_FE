import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  return res.status(200).json({
    feedback:
      "눈썹이 찌푸려져 있고 입이 크게 벌어져 있는 모습이 분노의 감정을 잘 표현하고 있습니다. 슬픔을 표현하기 위해서는 눈썹을 약간 내려뜨리고 입꼬리를 아래로 내리는 것이 도움이 될 것입니다. 또한, 눈의 기분을 더 부드럽게 만들어주면 슬픔이 더욱 잘 드러날 수 있습니다.",
  });
}
