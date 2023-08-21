import { Request, Response } from "express";
import { ILoginRequest } from "../types/interfaces";

export const login = async (req: ILoginRequest, res: Response) => {
  const { username, password } = req.loginQuery;
  res
    .status(200)
    .json({
      message: "Fake Login/Register/Signup",
      data: { username, password },
    });
};

export const dashboard = async (_req: Request, res: Response) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello There`,
    secret: `Here is your authorized, data your lucky number is ${luckyNumber}`,
  });
};
