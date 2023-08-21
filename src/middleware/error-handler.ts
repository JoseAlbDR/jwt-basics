import { NextFunction, Request, Response } from "express";
import { CustomAPIError } from "../errors";
import { StatusCodes } from "http-status-codes";
const errorHandlerMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: "Something went wrong try again later", error: err });
};

export default errorHandlerMiddleware;
