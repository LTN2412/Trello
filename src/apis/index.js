import axios from "axios";
import { API_ROOT } from "@/utils/constants";

axios.defaults.withCredentials = true;

export const AuthenticateAPI = async (data) => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }
  try {
    await axios.post(`${API_ROOT}/user/token`, formData);
    const response = await axios.post(`${API_ROOT}/user/boardId`);
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};

export const FetchUserIdAPI = async () => {
  const response = await axios.post(`${API_ROOT}/user/boardId`);
  return response.data;
};

export const FetchBoardAPI = async (boardId) => {
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

export const DndCardAPI = async (dndData) => {
  await axios.post(`${API_ROOT}/column/dnd`, dndData);
};

export const UpdateCardAPI = async (cardData) => {
  await axios.post(`${API_ROOT}/card/update`, cardData);
};
