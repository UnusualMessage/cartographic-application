import { baseUrl } from "../../assets/api/config";
import { User } from "../../types/entities";
import { Error } from "../../types/api";
import { get, post } from "../../utils/api/requests";
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
