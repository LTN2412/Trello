import { StatusCodes } from "http-status-codes";

export default function errorHandlingMiddleware(err, req, res, next) {
  if (!err.StatusCode) err.StatusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  const responseError = {
    statusCode: err.StatusCode,
    message: err.message || StatusCodes[err.statusCode],
    stack: err.stack,
  };
  if (process.env.BUILD_MODE == "prod") delete responseError.stack;
  res.status(responseError.statusCode).json(responseError);
}
