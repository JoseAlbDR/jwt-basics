import { NextFunction, Request, Response } from "express";
import { BadRequestError, UnauthenticatedError } from "../errors";
const errorHandlerMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof BadRequestError || err instanceof UnauthenticatedError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ message: "Something went wrong try again later", error: err });
};

export default errorHandlerMiddleware;
