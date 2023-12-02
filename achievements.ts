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

function isGame(
  achievementOrGame: Achievement | Game
): achievementOrGame is Game {
  return (achievementOrGame as Game).achievements !== undefined;
}

export function calculateAdjustedScore(
  game: Game,
  achievementName: string
): number;
export function calculateAdjustedScore(achievement: Achievement): number;
export function calculateAdjustedScore(
  achievementOrGame: Achievement | Game,
  achievementName?: string
): number {
  const achievement = isGame(achievementOrGame)
    ? achievementOrGame.achievements.find(
        (achievement) => achievement.title === achievementName
      )
    : achievementOrGame;

  if (!achievement) {
    throw new Error("Achievement not found");
  }

  return achievement.points * Math.sqrt(1 / achievement.unlockRatio);
}
