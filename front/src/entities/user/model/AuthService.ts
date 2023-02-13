import { Error } from "@shared/misc/types/api";
import { AccessToken, AuthenticateUser } from "@shared/misc/types/entities/User";
import { baseUrl } from "@shared/constants";
import { get, post } from "@shared/lib/utils/requests";

class AuthService {
  protected readonly url: string;

  constructor() {
    this.url = `${baseUrl}/auth`;
  }

  public access = async (): Promise<AccessToken | Error> => {
    return await get(this.url, "access", "");
  };

  public authenticate = async (
    model: AuthenticateUser
  ): Promise<AccessToken | Error> => {
    return await post(model, this.url, "authenticate", "");
  };

  public refresh = async (): Promise<AccessToken | Error> => {
    return await post({}, this.url, "refresh", "");
  };
}

export default AuthService;
