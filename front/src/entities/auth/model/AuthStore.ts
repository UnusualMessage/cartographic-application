import { makeAutoObservable } from "mobx";

import { users } from "@shared/assets";
import { AuthenticateUser, User, FetchService } from "@shared/misc";

import AuthService from "./AuthService";

class AuthStore {
  private _entered: boolean;
  private _accessToken: string;
  private _user?: User;

  private _api: AuthService;
  private _fetch: FetchService;

  constructor() {
    this._entered = true;
    this._user = users[1];
    this._accessToken = "";

    this._api = new AuthService();
    this._fetch = new FetchService();

    makeAutoObservable(this);
  }

  public get user() {
    return this._user;
  }

  public get entered() {
    return this._entered;
  }

  public authenticateUser = async (data: AuthenticateUser) => {
    const account = users.find((user) => user.login === data.login);

    if (!account) {
      this._fetch.invokeError("Пользователь не найден");
      this.logout();
      return;
    }

    this._fetch.invokeSuccess();
    this.login("");
    this._user = account;
  };

  public logout = () => {
    this._accessToken = "";
    this._entered = false;
    this._user = undefined;
  };

  private login = (accessToken: string) => {
    this._accessToken = accessToken;
    this._entered = true;
  };
}

export default new AuthStore();
