import APIError from "@/utils/APIError";
import { StatusCodes } from "http-status-codes";
import Joi from "joi";

const createSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required()
});

const checkBoard = async (req, res, next) => {
  try {
    await createSchema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (err) {
    const errMessage = new Error(err).message;
    const customError = new APIError(
      StatusCodes.UNPROCESSABLE_ENTITY,
      errMessage
    );
    next(customError);
  }
};

const boardValidation = {
  checkBoard,
};

export default boardValidation;
