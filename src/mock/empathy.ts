export default function () {
  return [
    {
      url: "/empathy/scenario",
      method: "get",
      timeout: 500,
      response: ({ query }: {query: {option: Emotion}}) => {
        const option = query.option
        const scenarios = {
          RANDOM: "나 진짜 아직도 믿기지가 않아… 오늘 내가 그렇게 오래 준비했던 거 드디어 해냈어. 너무 벅차서 계속 웃음이 나.",
          JOY: "나 진짜 아직도 믿기지가 않아… 오늘 내가 그렇게 오래 준비했던 거 드디어 해냈어. 너무 벅차서 계속 웃음이 나.",
          SADNESS: "요즘은 그냥… 아무것도 손에 안 잡히고, 뭘 해도 마음이 계속 가라앉아. 괜찮은 척하는 것도 점점 힘들어.",
          ANGER: "이번엔 진짜 너무 심해서 화가 멈추질 않아. 누적된 게 한 번에 터진 느낌이야. 더는 그냥 넘길 수가 없어.",
          ANXIETY: "갑자기 주변이 너무 낯설게 느껴지고, 괜히 숨이 막히는 것 같아서 무서워졌어. 혼자 있으니까 더 불안해지는 느낌이야.",
          SURPRISE: "아까 들은 말이 너무 예상 밖이라서 아직도 정신이 멍해. 좋은 건지 나쁜 건지 판단도 안 서고 그냥 얼어버린 느낌이야."
        };

        return {
          scenario: scenarios[option]
        }
      }
    },
    {
      url: "/empathy/submit",
      method: "post",
      timeout: 500,
      response: () => {
        return {
          feedback: "지금 네 공감 표현 아주 정확했어요. 감정을 있는 그대로 인정해주면서도 안정감을 주는 방식이 좋았습니다."
        }
      }
    },
  ]
}