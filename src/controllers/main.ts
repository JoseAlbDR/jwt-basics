import { Request, Response } from "express";
import { ILoginRequest } from "../types/interfaces";
import CustomAPIError from "../errors/custom-error";

export const login = async (req: ILoginRequest, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomAPIError("Invalid username or password", 400);
  }
  res.send("Fake Login/Register/Signup");
};

export const dashboard = async (_req: Request, res: Response) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello There`,
    secret: `Here is your authorized, data your lucky number is ${luckyNumber}`,
  });
};
