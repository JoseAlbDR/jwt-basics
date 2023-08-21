import { Request } from "express";

export interface ILoginBody {
  username: string;
  password: number;
}

export interface ILoginRequest extends Request {
  body: ILoginBody;
}
