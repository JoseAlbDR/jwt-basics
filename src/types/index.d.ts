export {};

declare global {
  namespace Express {
    interface Request {}
  }
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      PORT: string;
      DATABASE_URL: string;
    }
  }
}
