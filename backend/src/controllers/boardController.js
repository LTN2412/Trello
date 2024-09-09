import boardService from "@/services/boardService";
import { StatusCodes } from "http-status-codes";

async function createNewBoard(req, res, next) {
  try {
    const createdBoard = await boardService.createBoard(req.body);
    res.status(StatusCodes.CREATED).json(createdBoard);
  } catch (err) {
    next(err);
  }
}

async function getBoard(req, res, next) {
  try {
    const board = await boardService.getBoard(req.params.id);
    res.status(StatusCodes.OK).json(board);
  } catch (err) {
    next(err);
  }
}

const dndColumn = async (req, res, next) => {
  try {
    await boardService.dndColumn(req.body);
    return res.status(StatusCodes.OK).json({ OK: 200 });
  } catch (err) {
    next(err);
  }
};
const boardController = {
  createNewBoard,
  getBoard,
  dndColumn,
};

export default boardController;
