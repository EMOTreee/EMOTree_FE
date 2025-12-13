import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  return res.status(200).json({
    feedback:
      "이번 시도에서는 목표 감정인 '분노'를 잘 표현하셨습니다. 목소리 톤의 높낮이가 다양하게 변화하여 감정의 강도가 잘 전달되었습니다. 특히, 목소리에 실린 힘이 적절하게 조절되어 분노의 감정이 효과적으로 드러났습니다. 텍스트 선택도 불만과 짜증을 잘 표현하고 있어 감정 전달에 큰 도움이 되었습니다. 다만, 목소리의 울림이 조금 더 강하게 나타나면 감정 전달이 더욱 강화될 수 있습니다. 구체적인 사례를 추가하여 감정의 깊이를 더 풍부하게 표현해 보세요. 전반적으로 아주 잘하셨고, 앞으로도 이런 방향으로 연습을 계속하시면 좋을 것 같습니다!",
  });
}
