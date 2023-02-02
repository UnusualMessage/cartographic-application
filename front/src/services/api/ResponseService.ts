import { Response } from "../../types/api";

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

  public isRequestSuccessful = () => {
    return this.response.successful;
  };

  public getErrorMessage = () => {
    return this.response.message;
  };
}

export default ResponseService;
