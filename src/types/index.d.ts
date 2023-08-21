import { ILoginBody } from "./interfaces";

export {};

declare global {
  namespace Express {
    interface Request {
      loginQuery: ILoginBody;
    }
  }
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      PORT: string;
      DATABASE_URL: string;
    }
  }
}
