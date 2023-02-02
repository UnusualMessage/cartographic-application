import { makeAutoObservable, runInAction } from "mobx";

import { User } from "../../../shared/api/types/entities";
import { AuthenticateUser } from "../../../shared/api/types/entities/User";
import { users } from "../../../shared/assets/samples/users";
import { isError } from "../../../shared/lib/utils/responses";
import { ResponseService, UsersService } from "../../services/api";

class UsersStore {
  private _users: User[];

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

  public getUsers = async (token: string) => {
    const data = await this._usersService.getUsers(token);

    if (isError(data)) {
      this._responseService.invokeError(data.message);
      return;
    }

    this._responseService.invokeSuccess();
    runInAction(() => {
      this._users = data;
    });
  };

  public register = async (user: AuthenticateUser, token: string) => {
    const data = await this._usersService.createUser(user, token);

    if (isError(data)) {
      this._responseService.invokeError(data.message);
      return;
    }

    this._responseService.invokeSuccess();
    runInAction(() => {
      const users = this.users.slice();
      users.push(data);
      this._users = users;
    });
  };
}

export default new UsersStore();
