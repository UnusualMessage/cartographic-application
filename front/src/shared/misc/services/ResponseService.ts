import type { Response } from "../types";

class ResponseService {
  protected response: Response;

  constructor() {
    this.response = {
      message: "",
      successful: true,
    };
  }

  public invokeSuccess = () => {
    this.response = {
      message: "",
      successful: true,
    };
  };

  public invokeError = (error: string) => {
    this.response = {
      message: error,
      successful: false,
    };
  };
}

export default ResponseService;
