import { makeAutoObservable, runInAction } from "mobx";

import { users } from "@shared/assets";
import { isError } from "@shared/lib";
import { ResponseService, AuthenticateUser, User } from "@shared/misc";

import AuthService from "./AuthService";

class AuthStore {
  private _isLogin: boolean;
  private _accessToken: string;
  private _authService: AuthService;
  private _responseService: ResponseService;
  private _user?: User;

  constructor() {
    this._isLogin = false;
    this._accessToken = "";
    this._authService = new AuthService();
    this._responseService = new ResponseService();
    this._user = users[0];

    makeAutoObservable(this);
  }

  public get fullName() {
    return this._user?.fullName;
  }

  public entered = () => {
    return this._isLogin;
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
