import { NextFunction, Request, Response } from "express";
import CustomAPIError from "../errors/custom-error";
const errorHandlerMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).send("Something went wrong try again later");
};

export default errorHandlerMiddleware;
