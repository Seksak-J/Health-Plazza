// types/index.ts
export interface Answer {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  question: string;
  answers: Answer[];
}

export interface LeaderboardEntry {
  name: string;
  score: number;
}
