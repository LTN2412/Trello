import columnService from "@/services/columnService";
import { StatusCodes } from "http-status-codes";

const createColumn = async (req, res, next) => {
  try {
    const createColumn = await columnService.createColumn(req.body);
    return res.status(StatusCodes.CREATED).json(createColumn);
  } catch (err) {
    next(err);
  }
};

const dndCard = async (req, res, next) => {
  try {
    await columnService.dndCard(req.body);
    return res.status(StatusCodes.OK).json({ OK: 200 });
  } catch (err) {
    next(err);
  }
};

const columnController = { createColumn, dndCard };

export default columnController;
