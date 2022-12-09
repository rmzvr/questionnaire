export interface Answer {
  id: number;
  name: string;
}

export interface ExtendedAnswer {
  questionId: number;
  answerId: number;
}

export interface Question {
  id: number;
  name: string;
  answers: Answer[];
  selectedAnswer?: Answer;
  previousSelectedAnswer?: Answer;
}

export interface Result {
  totalPoints: number;
  description: string;
}
