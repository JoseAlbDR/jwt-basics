import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { IDecodedToken } from "../types/interfaces";
import { UnauthenticatedError } from "../errors";
const authenticationMiddleware = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader === null || !authHeader?.startsWith("Bearer ")) {
    throw new UnauthenticatedError("No token provided");
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
    throw new UnauthenticatedError("No authorized to access this route");
  }
};

export default authenticationMiddleware;
