import prisma from "@/config/mongoPrisma";
import Joi from "joi";
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from "./objectIdValidator.js";

const COLUMN_COLLECTION_SCHEMA = Joi.object({
  boardId: Joi.string()
    .required()
    .pattern(OBJECT_ID_RULE)
    .message(OBJECT_ID_RULE_MESSAGE),
  title: Joi.string().required().trim().strict(),
});

const validateColumnData = async (columnData) => {
  return await COLUMN_COLLECTION_SCHEMA.validateAsync(columnData, {
    abortEarly: false,
  });
};

const createColumn = async (columnData) => {
  try {
    const validData = await validateColumnData(columnData);
    return await prisma.column.create({ data: validData });
  } catch (err) {
    throw new Error(err);
  }
};

const addColumnIds = async (boardId, columnId) => {
  try {
    await prisma.board.update({
      where: { id: boardId },

      data: {
        columnOrderIds: {
          push: columnId,
        },
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};

const getColumn = async (columnId) => {
  try {
    prisma.column.findFirst({ where: { id: columnId } });
  } catch (err) {
    throw new Error(err);
  }
};

const dndCard = async (columnId, newCardOrderIds) => {
  try {
    await prisma.column.update({
      where: { id: columnId },
      data: {
        cardOrderIds: newCardOrderIds,
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};

const columnModel = {
  createColumn,
  addColumnIds,
  getColumn,
  dndCard,
};

export default columnModel;
