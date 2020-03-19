export declare interface IQuestion {
  question: string;
  nextQuestionId: string;
  answers: string[];
}

export declare interface IQuestionRequest {
  questionCode: string;
  answer: string;
}