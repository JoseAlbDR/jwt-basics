import { NextFunction, Response } from "express";
import { validateUserData } from "../utils/validation";
import CustomAPIError from "../errors/custom-error";
import { ILoginRequest } from "../types/interfaces";

const validateLoginQuery = (
  req: ILoginRequest,
  _res: Response,
  next: NextFunction
) => {
  const { body } = req;
  const valid = validateUserData(body);

  if (valid.error) {
    const messages = valid.error.details.map(
      (detail): string => detail.message
    );
    throw new CustomAPIError(messages.join(" "), 400);
  }

  req.loginQuery = valid.value;
  return next();
};

export default validateLoginQuery;
