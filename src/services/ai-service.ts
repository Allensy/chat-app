import { Sender, UserData } from "./../types/Message.interface";
import axios from "axios";
import { Answer } from "../types/Message.interface";
import {
  BASE_URL,
  QUERY_ENDPOINT,
  QUESTION_ENDPOINT,
} from "../constants/configs";

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

export const getUserData = (): UserData | null => {
  try {
    let data = localStorage.getItem("userData");
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const resetUserData = () => {
  localStorage.removeItem("userData");
};

export const getQuestionsAndAnswers = async (
  question: string
): Promise<Answer> => {
  let params = "";
  const userData: UserData | null = getUserData();
  if (userData) {
    const { company_size = null, industry = null, country = null } = userData;
    if (company_size) params += `&company_size=${company_size}`;
    if (industry) params += `&industry=${industry}`;
    if (country) params += `&country=${country}`;
  }
  const response = await axios.get(
    `${BASE_URL}${QUESTION_ENDPOINT}${question}${params}`
  );
  let result: Answer = {
    sender: Sender.AI,
    response: "Sorry, I don't understand what you mean.",
  };
  try {
    result = JSON.parse(response.data);
  } catch (e) {
    console.error(e);
  }
  return result;
};

export const voteResponse = async (vote: VoteRequest) => {
  const response = await axios.put(`${BASE_URL}${QUERY_ENDPOINT}`, vote);
  return response.data;
};
