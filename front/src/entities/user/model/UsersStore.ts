import { makeAutoObservable } from "mobx";

import { users } from "@shared/assets";
import { User, ResponseService } from "@shared/misc";

import UsersService from "./UsersService";

class UsersStore {
  private readonly _users: User[];

  private _usersService: UsersService;
  private _responseService: ResponseService;

  constructor() {
    this._users = users;

    this._responseService = new ResponseService();
    this._usersService = new UsersService();

    makeAutoObservable(this);
  }

  public get users() {
    return this._users;
  }
}

export default new UsersStore();
