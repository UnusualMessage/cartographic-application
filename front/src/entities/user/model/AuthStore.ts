import { makeAutoObservable, runInAction } from "mobx";

import AuthService from "@entities/user/model/AuthService";
import { isError } from "@shared/lib/utils/responses";
import ResponseService from "@shared/misc/services/ResponseService";
import { AuthenticateUser } from "@shared/misc/types/entities/user";

class AuthStore {
  private _isLogin: boolean;
  private _accessToken: string;
  private _authService: AuthService;
  private _responseService: ResponseService;

  constructor() {
    this._isLogin = false;
    this._accessToken = "";
    this._authService = new AuthService();
    this._responseService = new ResponseService();

    makeAutoObservable(this);
  }

  public entered = () => {
    return this._isLogin;
  };

  public getAccessToken = () => {
    return this._accessToken;
  };

  public access = async () => {
    const data = await this._authService.access();

    if (isError(data)) {
      this._responseService.invokeError(data.message);
      return;
    }

    this._responseService.invokeSuccess();
    runInAction(() => {
      this.login(data.token);
    });
  };

  public authenticateUser = async (user: AuthenticateUser) => {
    const data = await this._authService.authenticate(user);

    if (isError(data)) {
      this._responseService.invokeError(data.message);
      this.logout();
      return;
    }

    this._responseService.invokeSuccess();
    runInAction(() => {
      this.login(data.token);
    });
  };

  public refreshUser = async () => {
    const data = await this._authService.refresh();

    if (isError(data)) {
      this._responseService.invokeError(data.message);
      this.logout();
      return;
    }

    this._responseService.invokeSuccess();
    runInAction(() => {
      this.login(data.token);
    });
  };

  private login = (accessToken: string) => {
    this._accessToken = accessToken;
    this._isLogin = true;
  };

  private logout = () => {
    this._accessToken = "";
    this._isLogin = false;
  };
}

export default new AuthStore();
