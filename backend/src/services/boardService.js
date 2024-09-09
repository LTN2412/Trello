import boardModel from "@/models/boardModel";
import APIError from "@/utils/APIError";
import slugify from "@/utils/slugify";
import { StatusCodes } from "http-status-codes";

const createBoard = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title),
    };
    const createdBoard = await boardModel.createBoard(newBoard);
    const getNewBoard = await boardModel.getBoard(createdBoard.insertedId);
    return getNewBoard;
  } catch (err) {
    throw new Error(err);
  }
};

const getBoard = async (id) => {
  try {
    const board = await boardModel.getBoard(id);
    return board;
  } catch (err) {
    throw new APIError(StatusCodes.NOT_FOUND, "Board not found!");
  }
};

const dndColumn = async (reqBody) => {
  try {
    await boardModel.dndColumn(reqBody.boardId, reqBody.columnOrderIds);
  } catch (err) {
    throw new Error(err);
  }
};

const deleteBoard = async () => {};
const boardService = {
  createBoard,
  getBoard,
  dndColumn,
  deleteBoard,
};
export default boardService;
