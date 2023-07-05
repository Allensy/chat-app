import axios from "axios";

const API_BASE_URL = "http://10.1.23.186:8000";

const QUERY_ENDPOINT = "/embedded/index-model";
const QUESTION_ENDPOINT = "/questions/";

interface Embedding {
  question: string;
  companyName?: string;
  companySize?: number;
  companyIndustry?: string;
  companyCountry?: string;
  conversationDate?: number;
  model?: string;
}

interface Question {
  question: string;
  answer: string;
  rate: number;
}

export const askQuestion = async (query: string) => {
  const dataToSend: Embedding = {
    question: query,
  };

  const response = await axios.post(`${API_BASE_URL}${QUERY_ENDPOINT}`, {
    dataToSend,
  });

  return response.data;
};

export const getQuestionsAndAnswers = async (
  questionId: string
): Promise<Question[]> => {
  const response = await axios.get(
    `${API_BASE_URL}${QUESTION_ENDPOINT}${questionId}`
  );
  return response.data;
};
