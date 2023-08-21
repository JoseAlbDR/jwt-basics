import { Request } from "express";

interface ILoginBody {
  username: string;
  password: number;
}

export interface ILoginRequest extends Request {
  body: ILoginBody;
}
