import CustomAPIError from "./custom-error";
import { StatusCodes } from "http-status-codes";

class UnauthenticatedError extends CustomAPIError {
  statusCode;
  constructor(public message: string) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default UnauthenticatedError;
