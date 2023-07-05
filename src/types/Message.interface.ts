export enum Sender {
  BOT = "bot",
  USER = "user",
  AI = "AI",
}

export interface Message {
  message: string;
  sender: Sender;
}

export enum AI_STATE {
  WAITING = "waiting",
  READY = "ready",
}
