import { UserData } from "./../types/Message.interface";
import axios from "axios";
import { Answer } from "../types/Message.interface";
import {
  BASE_URL,
  QUERY_ENDPOINT,
  QUESTION_ENDPOINT,
} from "../constants/configs";
// require("dotenv").config();

// interface Embedding {
//   question: string;
//   companyName?: string;
//   companySize?: number;
//   companyIndustry?: string;
//   companyCountry?: string;
//   conversationDate?: number;
//   model?: string;
// }

// export const askQuestion = async (query: string) => {
//   const dataToSend: Embedding = {
//     question: query,
//   };

//   const response = await axios.post(`${API_BASE_URL}${QUERY_ENDPOINT}`, {
//     dataToSend,
//   });

//   return response.data;
// };

export interface VoteRequest {
  questionId: string;
  vote: VOTES;
  vote_reason?: string;
}

export enum VOTES {
  UP = 1,
  DOWN = -1,
}

export const initializeUser = (data: UserData) => {
  localStorage.setItem("userData", JSON.stringify(data));
};

export const getQuestionsAndAnswers = async (
  question: string
): Promise<Answer[]> => {
  const response = await axios.get(
    `${BASE_URL}${QUESTION_ENDPOINT}${question}`
  );
  return response.data;
};

export const voteResponse = async (vote: VoteRequest) => {
  const response = await axios.put(`${BASE_URL}${QUERY_ENDPOINT}`, vote);
  return response.data;
};
