import { baseUrl } from "@shared/constants";
import { get, post } from "@shared/lib";
import { User, AuthenticateUser, Error } from "@shared/misc";

class UsersService {
  protected readonly url: string;

  constructor() {
    this.url = `${baseUrl}/users`;
  }

  public getUsers = async (token: string): Promise<User[] | Error> => {
    return await get(this.url, "", "", token);
  };

  public createUser = async (
    user: AuthenticateUser,
    token: string
  ): Promise<User | Error> => {
    return await post(user, this.url, "", "", token);
  };
}

export default UsersService;
