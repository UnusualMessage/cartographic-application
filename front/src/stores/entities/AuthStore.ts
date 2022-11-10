import { makeAutoObservable, runInAction } from "mobx";

import { AuthService, ResponseService } from "../../services/api";
import { AuthenticateUser } from "../../types/entities/User";
import { isError } from "../../utils/api/responses";

class AuthStore {
  private isLogin: boolean;
  private accessToken: string;
  private authService: AuthService;
  private responseService: ResponseService;

  constructor() {
    this.isLogin = false;
    this.accessToken = "";
    this.authService = new AuthService();
    this.responseService = new ResponseService();

    makeAutoObservable(this);
  }

  public entered = () => {
    return this.isLogin;
  };

  public getAccessToken = () => {
    return this.accessToken;
  };

  public access = async () => {
    const data = await this.authService.access();

    if (isError(data)) {
      this.responseService.invokeError(data.message);
      return;
    }

    this.responseService.invokeSuccess();
    runInAction(() => {
      this.login(data.token);
    });
  };

  public authenticateUser = async (user: AuthenticateUser) => {
    const data = await this.authService.authenticate(user);

    if (isError(data)) {
      this.responseService.invokeError(data.message);
      this.logout();
      return;
    }

    this.responseService.invokeSuccess();
    runInAction(() => {
      this.login(data.token);
    });
  };

  public refreshUser = async () => {
    const data = await this.authService.refresh();

    if (isError(data)) {
      this.responseService.invokeError(data.message);
      this.logout();
      return;
    }

    this.responseService.invokeSuccess();
    runInAction(() => {
      this.login(data.token);
    });
  };

  private login = (accessToken: string) => {
    this.accessToken = accessToken;
    this.isLogin = true;
  };

  private logout = () => {
    this.accessToken = "";
    this.isLogin = false;
  };
}

export default new AuthStore();
