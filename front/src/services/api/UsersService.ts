import { baseUrl } from "../../shared/assets/api/config";
import { User } from "../../shared/api/types/entities";
import { Error } from "../../shared/api/types/api";
import { get, post } from "../../shared/lib/utils/requests";
import { AuthenticateUser } from "../../shared/api/types/entities/User";

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
