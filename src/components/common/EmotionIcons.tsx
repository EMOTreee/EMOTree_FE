import type { ComponentProps } from "react";
import { 
  AngryIcon,
  AnxietyIcon,
  JoyIcon,
  RandomIcon,
  SadnessIcon,
  SurpriseIcon 
} from "../../assets";

const iconMap: Record<Emotion, React.ComponentType<ComponentProps<"svg">>> = {
  RANDOM: RandomIcon,
  JOY: JoyIcon,
  SADNESS: SadnessIcon,
  ANGRY: AngryIcon,
  SURPRISE: SurpriseIcon,
  ANXIETY: AnxietyIcon,
};

export function EmotionIcon({
  emotion,
  ...props
}: { emotion: Emotion } & ComponentProps<"svg">) {
  const EmotionIcon = iconMap[emotion];
  return <EmotionIcon {...props} />;
}
