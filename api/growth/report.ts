import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const data = {
    "interpretGrowthList": [
      {
        "emotion": "JOY",
        "data": [
          {
            "x": "JAN",
            "y": null
          },
          {
            "x": "FEB",
            "y": null
          },
          {
            "x": "MAR",
            "y": null
          },
          {
            "x": "APR",
            "y": null
          },
          {
            "x": "MAY",
            "y": null
          },
          {
            "x": "JUN",
            "y": null
          },
          {
            "x": "JUL",
            "y": 55
          },
          {
            "x": "AUG",
            "y": 60
          },
          {
            "x": "SEP",
            "y": 52.5
          },
          {
            "x": "OCT",
            "y": 62.5
          },
          {
            "x": "NOV",
            "y": 72.5
          },
          {
            "x": "DEC",
            "y": 65
          }
        ]
      },
      {
        "emotion": "SADNESS",
        "data": [
          {
            "x": "JAN",
            "y": null
          },
          {
            "x": "FEB",
            "y": null
          },
          {
            "x": "MAR",
            "y": null
          },
          {
            "x": "APR",
            "y": null
          },
          {
            "x": "MAY",
            "y": null
          },
          {
            "x": "JUN",
            "y": null
          },
          {
            "x": "JUL",
            "y": 52.5
          },
          {
            "x": "AUG",
            "y": 55
          },
          {
            "x": "SEP",
            "y": 45
          },
          {
            "x": "OCT",
            "y": 55
          },
          {
            "x": "NOV",
            "y": 47.5
          },
          {
            "x": "DEC",
            "y": 55
          }
        ]
      },
      {
        "emotion": "ANGER",
        "data": [
          {
            "x": "JAN",
            "y": null
          },
          {
            "x": "FEB",
            "y": null
          },
          {
            "x": "MAR",
            "y": null
          },
          {
            "x": "APR",
            "y": null
          },
          {
            "x": "MAY",
            "y": null
          },
          {
            "x": "JUN",
            "y": null
          },
          {
            "x": "JUL",
            "y": 30
          },
          {
            "x": "AUG",
            "y": 52.5
          },
          {
            "x": "SEP",
            "y": 57.5
          },
          {
            "x": "OCT",
            "y": 47.5
          },
          {
            "x": "NOV",
            "y": 45
          },
          {
            "x": "DEC",
            "y": 62.5
          }
        ]
      },
      {
        "emotion": "SURPRISE",
        "data": [
          {
            "x": "JAN",
            "y": null
          },
          {
            "x": "FEB",
            "y": null
          },
          {
            "x": "MAR",
            "y": null
          },
          {
            "x": "APR",
            "y": null
          },
          {
            "x": "MAY",
            "y": null
          },
          {
            "x": "JUN",
            "y": null
          },
          {
            "x": "JUL",
            "y": 60
          },
          {
            "x": "AUG",
            "y": 47.5
          },
          {
            "x": "SEP",
            "y": 45
          },
          {
            "x": "OCT",
            "y": 55
          },
          {
            "x": "NOV",
            "y": 62.5
          },
          {
            "x": "DEC",
            "y": 60
          }
        ]
      },
      {
        "emotion": "ANXIETY",
        "data": [
          {
            "x": "JAN",
            "y": null
          },
          {
            "x": "FEB",
            "y": null
          },
          {
            "x": "MAR",
            "y": null
          },
          {
            "x": "APR",
            "y": null
          },
          {
            "x": "MAY",
            "y": null
          },
          {
            "x": "JUN",
            "y": null
          },
          {
            "x": "JUL",
            "y": 45
          },
          {
            "x": "AUG",
            "y": 40
          },
          {
            "x": "SEP",
            "y": 42.5
          },
          {
            "x": "OCT",
            "y": 47.5
          },
          {
            "x": "NOV",
            "y": 65
          },
          {
            "x": "DEC",
            "y": 52.5
          }
        ]
      }
    ],
    "empathyGrowthList": [
      {
        "emotion": "JOY",
        "data": [
          {
            "x": "JAN",
            "y": null
          },
          {
            "x": "FEB",
            "y": null
          },
          {
            "x": "MAR",
            "y": null
          },
          {
            "x": "APR",
            "y": null
          },
          {
            "x": "MAY",
            "y": null
          },
          {
            "x": "JUN",
            "y": null
          },
          {
            "x": "JUL",
            "y": 51
          },
          {
            "x": "AUG",
            "y": 55.8
          },
          {
            "x": "SEP",
            "y": 59.6
          },
          {
            "x": "OCT",
            "y": 62.2
          },
          {
            "x": "NOV",
            "y": 63.8
          },
          {
            "x": "DEC",
            "y": 65.2
          }
        ]
      },
      {
        "emotion": "SADNESS",
        "data": [
          {
            "x": "JAN",
            "y": null
          },
          {
            "x": "FEB",
            "y": null
          },
          {
            "x": "MAR",
            "y": null
          },
          {
            "x": "APR",
            "y": null
          },
          {
            "x": "MAY",
            "y": null
          },
          {
            "x": "JUN",
            "y": null
          },
          {
            "x": "JUL",
            "y": 48
          },
          {
            "x": "AUG",
            "y": 52.4
          },
          {
            "x": "SEP",
            "y": 54.8
          },
          {
            "x": "OCT",
            "y": 56.4
          },
          {
            "x": "NOV",
            "y": 59.8
          },
          {
            "x": "DEC",
            "y": 63.4
          }
        ]
      },
      {
        "emotion": "ANGER",
        "data": [
          {
            "x": "JAN",
            "y": null
          },
          {
            "x": "FEB",
            "y": null
          },
          {
            "x": "MAR",
            "y": null
          },
          {
            "x": "APR",
            "y": null
          },
          {
            "x": "MAY",
            "y": null
          },
          {
            "x": "JUN",
            "y": null
          },
          {
            "x": "JUL",
            "y": 53.2
          },
          {
            "x": "AUG",
            "y": 56.2
          },
          {
            "x": "SEP",
            "y": 56
          },
          {
            "x": "OCT",
            "y": 58.6
          },
          {
            "x": "NOV",
            "y": 59.6
          },
          {
            "x": "DEC",
            "y": 62.8
          }
        ]
      },
      {
        "emotion": "SURPRISE",
        "data": [
          {
            "x": "JAN",
            "y": null
          },
          {
            "x": "FEB",
            "y": null
          },
          {
            "x": "MAR",
            "y": null
          },
          {
            "x": "APR",
            "y": null
          },
          {
            "x": "MAY",
            "y": null
          },
          {
            "x": "JUN",
            "y": null
          },
          {
            "x": "JUL",
            "y": 51.6
          },
          {
            "x": "AUG",
            "y": 53.6
          },
          {
            "x": "SEP",
            "y": 58.4
          },
          {
            "x": "OCT",
            "y": 61.6
          },
          {
            "x": "NOV",
            "y": 62
          },
          {
            "x": "DEC",
            "y": 65
          }
        ]
      },
      {
        "emotion": "ANXIETY",
        "data": [
          {
            "x": "JAN",
            "y": null
          },
          {
            "x": "FEB",
            "y": null
          },
          {
            "x": "MAR",
            "y": null
          },
          {
            "x": "APR",
            "y": null
          },
          {
            "x": "MAY",
            "y": null
          },
          {
            "x": "JUN",
            "y": null
          },
          {
            "x": "JUL",
            "y": 49
          },
          {
            "x": "AUG",
            "y": 51
          },
          {
            "x": "SEP",
            "y": 53.8
          },
          {
            "x": "OCT",
            "y": 56.2
          },
          {
            "x": "NOV",
            "y": 57.2
          },
          {
            "x": "DEC",
            "y": 61.8
          }
        ]
      }
    ],
    "expressGrowthList": [
      {
        "emotion": "JOY",
        "data": [
          {
            "x": "JAN",
            "y": null
          },
          {
            "x": "FEB",
            "y": null
          },
          {
            "x": "MAR",
            "y": null
          },
          {
            "x": "APR",
            "y": null
          },
          {
            "x": "MAY",
            "y": null
          },
          {
            "x": "JUN",
            "y": null
          },
          {
            "x": "JUL",
            "y": 45.2
          },
          {
            "x": "AUG",
            "y": 55.4
          },
          {
            "x": "SEP",
            "y": 57.4
          },
          {
            "x": "OCT",
            "y": 64
          },
          {
            "x": "NOV",
            "y": 66
          },
          {
            "x": "DEC",
            "y": 68.8
          }
        ]
      },
      {
        "emotion": "SADNESS",
        "data": [
          {
            "x": "JAN",
            "y": null
          },
          {
            "x": "FEB",
            "y": null
          },
          {
            "x": "MAR",
            "y": null
          },
          {
            "x": "APR",
            "y": null
          },
          {
            "x": "MAY",
            "y": null
          },
          {
            "x": "JUN",
            "y": null
          },
          {
            "x": "JUL",
            "y": 50
          },
          {
            "x": "AUG",
            "y": 52.6
          },
          {
            "x": "SEP",
            "y": 58.8
          },
          {
            "x": "OCT",
            "y": 61.2
          },
          {
            "x": "NOV",
            "y": 66.8
          },
          {
            "x": "DEC",
            "y": 71.8
          }
        ]
      },
      {
        "emotion": "ANGER",
        "data": [
          {
            "x": "JAN",
            "y": null
          },
          {
            "x": "FEB",
            "y": null
          },
          {
            "x": "MAR",
            "y": null
          },
          {
            "x": "APR",
            "y": null
          },
          {
            "x": "MAY",
            "y": null
          },
          {
            "x": "JUN",
            "y": null
          },
          {
            "x": "JUL",
            "y": 44.2
          },
          {
            "x": "AUG",
            "y": 50
          },
          {
            "x": "SEP",
            "y": 60.4
          },
          {
            "x": "OCT",
            "y": 61.2
          },
          {
            "x": "NOV",
            "y": 66.2
          },
          {
            "x": "DEC",
            "y": 67.6
          }
        ]
      },
      {
        "emotion": "SURPRISE",
        "data": [
          {
            "x": "JAN",
            "y": null
          },
          {
            "x": "FEB",
            "y": null
          },
          {
            "x": "MAR",
            "y": null
          },
          {
            "x": "APR",
            "y": null
          },
          {
            "x": "MAY",
            "y": null
          },
          {
            "x": "JUN",
            "y": null
          },
          {
            "x": "JUL",
            "y": 48.4
          },
          {
            "x": "AUG",
            "y": 50.6
          },
          {
            "x": "SEP",
            "y": 58.6
          },
          {
            "x": "OCT",
            "y": 65.2
          },
          {
            "x": "NOV",
            "y": 65.4
          },
          {
            "x": "DEC",
            "y": 67.8
          }
        ]
      },
      {
        "emotion": "ANXIETY",
        "data": [
          {
            "x": "JAN",
            "y": null
          },
          {
            "x": "FEB",
            "y": null
          },
          {
            "x": "MAR",
            "y": null
          },
          {
            "x": "APR",
            "y": null
          },
          {
            "x": "MAY",
            "y": null
          },
          {
            "x": "JUN",
            "y": null
          },
          {
            "x": "JUL",
            "y": 47.8
          },
          {
            "x": "AUG",
            "y": 55
          },
          {
            "x": "SEP",
            "y": 60.2
          },
          {
            "x": "OCT",
            "y": 63.6
          },
          {
            "x": "NOV",
            "y": 68.2
          },
          {
            "x": "DEC",
            "y": 66.8
          }
        ]
      }
    ],
    "monthlyReport": {
      "interpret": "이번 달 감정 인지 퀴즈의 전체 평균이 지난 달보다 약간 상승하였습니다. 특히 두 달 연속으로 'JOY(기쁨)', 'SADNESS(슬픔)', 'SURPRISE(놀람)' 감정이 긍정적인 경향을 보이며, 'ANGER(화남)'과 'ANXIETY(불안)'는 여전히 개선이 필요합니다. 특히 'ANXIETY(불안)'는 부정적인 패턴이 지속되고 있어, 이 감정에 대한 인식과 관리 방법을 더욱 강화해야 할 필요성이 있습니다.",
      "empathy": "공감 훈련에서 전체 평균 점수가 비약적으로 향상되었습니다. 모든 감정에서 상승세를 보였으며, 특히 'ANXIETY(불안)'에서 가장 두드러진 향상이 나타났습니다. 이는 감정 인식과 표현에 대한 훈련이 효과를 보고 있음을 보여줍니다. 그러나 'JOY(기쁨)'와 'ANGER(화남)' 감정의 향상폭이 다소 제한적이므로, 이 부분에 대해 컨텐츠나 연습을 추가함으로써 공감 능력을 더욱 확장할 필요가 있습니다.",
      "express": "감정 표현 점수가 지난 달에 비해 괄목할 만한 성장을 보였습니다. 특히 'JOY(기쁨)', 'ANGER(화남)', 'SADNESS(슬픔)'이 모두 상승하며 감정 표현력이 개선되었습니다. 그러나 'ANXIETY(불안)'가 가장 높은 점수를 기록했음에도 불구하고, 감정 표현 능력의 전반적인 균형을 위해 'ANGER(화남)'와 'JOY(기쁨)'에 대한 다양한 표현 방법을 탐구할 필요가 있습니다."
    },
    "empathyType": {
      "type": "EMOTIONAL",
      "ratio": 0.67
    }
  }

  res.status(200).json(data)
}
