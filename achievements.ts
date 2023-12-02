export interface Game {
  title: string;
  achievements: Achievement[];
}

export interface Achievement {
  title: string;
  description: string;
  points: number;
  secret: boolean;
  unlockRatio: number;
}

export function calculateAdjustedScore(achievement: Achievement): number {
  return achievement.points * Math.sqrt(1 / achievement.unlockRatio);
}
