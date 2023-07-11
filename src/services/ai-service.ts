import { UserData } from "./../types/Message.interface";
import axios from "axios";
import { Answer } from "../types/Message.interface";
import { BASE_URL, QUESTION_ENDPOINT } from "../constants/configs";
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
