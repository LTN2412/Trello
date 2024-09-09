import cardModel from "@/models/cardModel";
import APIError from "@/utils/APIError";
import { StatusCodes } from "http-status-codes";

const createCard = async (reqBody) => {
  try {
    const newCard = {
      ...reqBody,
    };
    const createNewCard = await cardModel.createCard(newCard);
    await cardModel.addCardOrderIds(createNewCard.columnId, createNewCard.id);
    return createNewCard;
  } catch (err) {
    throw new APIError(StatusCodes.FORBIDDEN, "Can't create");
  }
};

const updateCard = async (reqBody) => {
  try {
    await cardModel.updateCard(reqBody.id, reqBody.columnId);
  } catch (err) {
    throw new APIError(StatusCodes.FORBIDDEN, "Can't update");
  }
};

const cardService = { createCard, updateCard };

export default cardService;
