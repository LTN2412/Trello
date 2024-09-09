import prisma from "@/config/mongoPrisma.js";
import Joi from "joi";
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from "./objectIdValidator.js";

const CARD_COLLECTION_SCHEMA = Joi.object({
  columnId: Joi.string()
    .required()
    .pattern(OBJECT_ID_RULE)
    .message(OBJECT_ID_RULE_MESSAGE),
  title: Joi.string().required().trim().strict(),
  description: Joi.string().optional(),
});

const validateCardData = async (cardData) => {
  return await CARD_COLLECTION_SCHEMA.validateAsync(cardData, {
    abortEarly: false,
  });
};

const createCard = async (cardData) => {
  try {
    const validData = await validateCardData(cardData);
    return await prisma.card.create({ data: validData });
  } catch (err) {
    throw new Error(err);
  }
};

const addCardOrderIds = async (columnId, cardId) => {
  try {
    await prisma.column.update({
      where: { id: columnId },

      data: {
        cardOrderIds: {
          push: cardId,
        },
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};

const updateCard = async (id, columnId) => {
  try {
    await prisma.card.update({
      where: { id: id },
      data: {
        columnId: columnId,
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};

const getCard = async (cardId) => {
  try {
    return await prisma.card.findFirst({ where: { id: cardId } });
  } catch (err) {
    throw new Error(err);
  }
};

const cardModel = {
  createCard,
  addCardOrderIds,
  updateCard,
  getCard,
};

export default cardModel;
