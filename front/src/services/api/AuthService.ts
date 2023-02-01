import { baseUrl } from "../../assets/config/api";
import { Error } from "../../types/api";
import { AccessToken, AuthenticateUser } from "../../types/entities/User";
import { get, post } from "../../utils/api/requests";

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
