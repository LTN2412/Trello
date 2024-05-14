import axios from "axios";
import { API_ROOT } from "@/utils/constants";

axios.defaults.withCredentials = true;

export const CreateUserAPI = async (data) => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }
  const res = await axios.post(`${API_ROOT}/user/signup`, formData);
  await axios.post(`${API_ROOT}/board/create`, {
    title: "123",
    description: "123",
    userId: res.data.id,
  });
};

export const AuthenticateAPI = async (data) => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }
  try {
    await axios.post(`${API_ROOT}/user/token`, formData);
  } catch (err) {
    throw err.response.data;
  }
};

export const FetchUserAPI = async () => {
  const response = await axios.get(`${API_ROOT}/user`);
  return response.data;
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
