import prisma from "@/config/mongoPrisma";
import Joi from "joi";

const BOARD_SCHEMA = Joi.object({
  title: Joi.string().required().trim().strict(),
  slug: Joi.string().required().trim().strict(),
  description: Joi.string().required().trim().strict(),
});

const validateBoardData = async (boardData) => {
  return await BOARD_SCHEMA.validateAsync(boardData, { abortEarly: false });
};

const createBoard = async (boardData) => {
  try {
    const validData = await validateBoardData(boardData);
    return await prisma.board.create({ data: validData });
  } catch (err) {
    throw new Error(err);
  }
};

const getBoard = async (boardId) => {
  try {
    return await prisma.board.findFirst({
      where: { id: boardId },
      include: {
        columns: {
          include: { cards: true },
        },
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};

const dndColumn = async (boardId, newColumnOrderIds) => {
  try {
    await prisma.board.update({
      where: { id: boardId },
      data: {
        columnOrderIds: newColumnOrderIds,
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};

const boardModel = {
  createBoard,
  getBoard,
  dndColumn,
};
export default boardModel;
