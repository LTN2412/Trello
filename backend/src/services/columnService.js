import columnModel from "@/models/columnModel";
import APIError from "@/utils/APIError";
import { StatusCodes } from "http-status-codes";

const createColumn = async (reqBody) => {
  try {
    const newColumn = {
      ...reqBody,
    };
    const createNewColumn = await columnModel.createColumn(newColumn);
    await columnModel.addColumnIds(createNewColumn.boardId, createNewColumn.id);
    return { ...createNewColumn, cards: [] };
  } catch (err) {
    throw new APIError(StatusCodes.FORBIDDEN, "ko the tao");
  }
};

const dndCard = async (reqBody) => {
  try {
    await columnModel.dndCard(reqBody.columnId, reqBody.cardOrderIds);
  } catch (err) {
    throw new Error(err);
  }
};

const columnService = { createColumn, dndCard };

export default columnService;
