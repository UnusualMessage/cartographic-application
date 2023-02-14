import { baseUrl } from "@shared/constants";
import { get, post } from "@shared/lib/utils/requests";
import { Error } from "@shared/misc/types/api";
import { User } from "@shared/misc/types/entities";
import { AuthenticateUser } from "@shared/misc/types/entities/user";

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
