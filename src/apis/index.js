import axios from "axios";
import { API_ROOT } from "@/utils/constants";

export const fetchBoardAPI = async (boardId) => {
  const response = await axios.get(`${API_ROOT}/board/${boardId}`);
  return response.data;
};

export const CreateNewColumnAPI = async (columnData) => {
  const response = await axios.post(`${API_ROOT}/column/create`, columnData);
  return response.data;
};

export const CreateNewCardAPI = async (cardData) => {
  const response = await axios.post(`${API_ROOT}/card/create`, cardData);
  return response.data;
};

export const DndColumnAPI = async (dndData) => {
  await axios.post(`${API_ROOT}/board/dnd`, dndData);
};
