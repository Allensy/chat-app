import axios from "axios";
import { Answer } from "../types/Message.interface";

// const API_BASE_URL = "http://127.0.0.1:8000";
const API_BASE_URL = "http://10.1.23.186:8000";

// const QUERY_ENDPOINT = "/embedded/index-model";
const QUESTION_ENDPOINT = "/questions/";

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

export const getQuestionsAndAnswers = async (
  question: string
): Promise<Answer[]> => {
  const response = await axios.get(
    `${API_BASE_URL}${QUESTION_ENDPOINT}${question}`
  );
  return response.data;
};
