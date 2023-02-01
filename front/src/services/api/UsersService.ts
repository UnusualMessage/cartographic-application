import { baseUrl } from "../../shared/constants/api";
import { get, post } from "../../shared/lib/utils/requests";
import { Error } from "../../types/api";
import { User } from "../../types/entities";
import { AuthenticateUser } from "../../types/entities/User";

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
