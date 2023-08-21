import Joi from "joi";
import { ILoginBody } from "../types/interfaces";

export const validateUserData = (userData: unknown) => {
  const loginSchema = Joi.object<ILoginBody>({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  return loginSchema.validate(userData, { errors: { wrap: { label: false } } });
};
