import CustomAPIError from "./custom-error";
import { StatusCodes } from "http-status-codes";

class BadRequest extends CustomAPIError {
  constructor(public message: string) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}

export default BadRequest;
