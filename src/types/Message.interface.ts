export enum Sender {
  BOT = "bot",
  USER = "user",
  AI = "AI",
}

export interface Message {
  message: string;
  sender: Sender;
  //   answer?: string;
}

export interface EmbeddingRequest {
  question: string;
  answer: string;
  isWin: boolean;
  companyName: string;
  companySize: string;
  companyIndustry: string;
  companyCountry: string;
  conversationDate: string;
}

export interface Question {
  question: string;
  answer: string;
  rate: number;
}

export interface Ai_Answer {
  sender: string;
  answer: string;
  error?: boolean;
}

export interface Answer extends Ai_Answer {
  date?: string;
  id?: string;
  payload?: null;
  question?: string;
  vector_score?: string;
}

export enum AI_STATE {
  WAITING = "waiting",
  READY = "ready",
}
