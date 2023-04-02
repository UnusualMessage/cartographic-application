import { isError } from "../../../lib";
import type { Response, Error } from "../../types";

type ApiAction<T> = () => Promise<T>;
type StoreAction<T> = (result: T) => void;

class ResponseService {
  protected response: Response;
  protected loading?: boolean;

  constructor() {
    this.response = {
      message: "",
      successful: true,
    };
  }

  public startLoading() {
    this.loading = true;
  }

  public stopLoading() {
    this.loading = false;
  }

  public invokeSuccess = () => {
    this.response = {
      message: "",
      successful: true,
    };
  };

  public async handleRequest<T>(
    fromApi: ApiAction<T | Error>,
    fromStore: StoreAction<T>
  ) {
    this.startLoading();
    const response = await fromApi();

    if (isError(response)) {
      this.invokeError(response.message);
      return;
    }

    fromStore(response);

    this.stopLoading();
    this.invokeSuccess();

    return response;
  }

  public invokeError = (error: string) => {
    this.response = {
      message: error,
      successful: false,
    };
  };
}

export default ResponseService;
