import cardService from "@/services/cardService";
import { StatusCodes } from "http-status-codes";

async function createNewCard(req, res, next) {
  try {
    const createdCard = await cardService.createCard(req.body);
    res.status(StatusCodes.CREATED).json(createdCard);
  } catch (err) {
    next(err);
  }
}

const updateCard = async (req, res, next) => {
  try {
    await cardService.updateCard(req.body);
    res.status(StatusCodes.CREATED).json("OK");
  } catch (err) {
    next(err);
  }
};
const cardController = {
  createNewCard,
  updateCard,
};

export default cardController;
