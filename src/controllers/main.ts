import { Request, Response } from "express";

export const login = async (_req: Request, res: Response) => {
  res.send("Fake Login/Register/Signup");
};

export const dashboard = async (_req: Request, res: Response) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello There`,
    secret: `Here is your authorized, data your lucky number is ${luckyNumber}`,
  });
};
