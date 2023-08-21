import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { ILoginRequest } from "../types/interfaces";
import CustomAPIError from "../errors/custom-error";
import("dotenv/config");

export const login = async (req: ILoginRequest, res: Response) => {
  const { username } = req.loginQuery;

  // just for demo, normally provided by DB
  const id = new Date().getDate();

  try {
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.status(200).json({
      message: "User created",
      token,
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const dashboard = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  if (!authHeader === null || !authHeader?.startsWith("Bearer ")) {
    throw new CustomAPIError("No token provided", 401);
  }

  const token = authHeader.split(" ").at(1);
  console.log(token);
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello There`,
    secret: `Here is your authorized, data your lucky number is ${luckyNumber}`,
  });
};
