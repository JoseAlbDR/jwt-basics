import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import CustomAPIError from "../errors/custom-error";
import { IDecodedToken } from "../types/interfaces";
const authenticationMiddleware = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader === null || !authHeader?.startsWith("Bearer ")) {
    throw new CustomAPIError("No token provided", 401);
  }

  const token = authHeader.split(" ").at(1);

  try {
    if (token) {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
      ) as IDecodedToken;

      const { id, username } = decoded;
      req.user = { username, id };
      next();
    }
  } catch (error) {
    throw new CustomAPIError("No authorized to access this route", 401);
  }
};

export default authenticationMiddleware;
