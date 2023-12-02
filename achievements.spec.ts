import { Game, calculateAdjustedScore } from "./achievements";
import { describe, expect, it } from "@jest/globals";

const jusant: Game = {
  title: "Jusant",
  achievements: [
    {
      title: "Avid reader",
      description: "Read all letters.",
      points: 90,
      secret: false,
      unlockRatio: 0.0107,
    },
    {
      title: "Final ascent",
      description: "Read all of Bianca's journal entries.",
      points: 90,
      secret: false,
      unlockRatio: 0.0128,
    },
    {
      title: "Sound archeologist",
      description: "Listen to all shells.",
      points: 90,
      secret: false,
      unlockRatio: 0.0109,
    },
    {
      title: "Cycle celebration",
      description: "Turn all altars.",
      points: 90,
      secret: false,
      unlockRatio: 0.0167,
    },
    {
      title: "Antique gallery manager",
      description: "Activate all frescos.",
      points: 90,
      secret: false,
      unlockRatio: 0.0119,
    },
    {
      title: "Common ground",
      description: "Complete all cairns.",
      points: 90,
      secret: false,
      unlockRatio: 0.0101,
    },
    {
      title: "First contact",
      description: "Read a letter.",
      points: 20,
      secret: false,
      unlockRatio: 0.653,
    },
    {
      title: "Back in motion",
      description: "Turn an altar.",
      points: 20,
      secret: false,
      unlockRatio: 0.2924,
    },
    {
      title: "An ear to the past",
      description: "Listen to a shell.",
      points: 20,
      secret: false,
      unlockRatio: 0.5457,
    },
    {
      title: "First stone",
      description: "Complete a cairn.",
      points: 20,
      secret: false,
      unlockRatio: 0.4315,
    },
    {
      title: "Echo from the past",
      description: "Activate a fresco.",
      points: 20,
      secret: false,
      unlockRatio: 0.3317,
    },
    {
      title: "Water piper",
      description: "Complete the game.",
      points: 100,
      secret: false,
      unlockRatio: 0.121,
    },
    {
      title: "Angel's carabiner",
      description: "Place a piton at the top of a wall run.",
      points: 30,
      secret: true,
      unlockRatio: 0.0974,
    },
    {
      title: "Acrobat",
      description: "Complete more than 200 jumps or double jumps in a game.",
      points: 30,
      secret: true,
      unlockRatio: 0.1548,
    },
    {
      title: "Bogeychoco",
      description: "Scare more than 10 chocos back to their burrow.",
      points: 30,
      secret: false,
      unlockRatio: 0.276,
    },
    {
      title: "Fresh air",
      description: "Restore your stamina more than 50 times while climbing.",
      points: 30,
      secret: true,
      unlockRatio: 0.2049,
    },
    {
      title: "Adventure buddies",
      description: "Hug the ballast.",
      points: 20,
      secret: false,
      unlockRatio: 0.3439,
    },
    {
      title: "Restored connection",
      description: "Hug the ballast 20 times.",
      points: 30,
      secret: false,
      unlockRatio: 0.0272,
    },
    {
      title: "Collective climb",
      description: "Stop 25 pebbles with a single echo from the ballast.",
      points: 30,
      secret: false,
      unlockRatio: 0.1179,
    },
    {
      title: "Awakened memory",
      description: "Use the echo on a frozen ballast in the crater.",
      points: 30,
      secret: false,
      unlockRatio: 0.0315,
    },
    {
      title: "A faint glimmer",
      description: "Hold the ballast tight in the crater.",
      points: 30,
      secret: true,
      unlockRatio: 0.0719,
    },
  ],
};

describe("calculateAdjustedScore", () => {
  it("should calculate the adjusted score of an achievement", () => {
    const achievement = jusant.achievements[0];
    const adjustedScore = calculateAdjustedScore(achievement);
    expect(adjustedScore).toBeCloseTo(870, 0);
  });

  it("should calculate the adjusted score of a game achievement by name", () => {
    const achievementName = "Water piper";
    const adjustedScore = calculateAdjustedScore(jusant, achievementName);
    expect(adjustedScore).toBeCloseTo(287, 0);
  });
});
